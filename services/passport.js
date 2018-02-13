const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => {
    done(null, user)
  })
})

let URL
if (process.env.NODE_ENV === 'production') {
  URL = 'https://calm-tor-73662.herokuapp.com/auth/google/callback'
} else {
  URL = '/auth/google/callback'
}

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: URL,
    },
    async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({googleId: profile.id})
    if (existingUser) {
      return done(null, existingUser)
    } else {
      const user = await new User({googleId: profile.id}).save()
      return done(null, user)
    }
  })
)