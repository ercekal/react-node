const passport = require('passport')

module.exports = app => {
  app.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  )

  app.get('/auth/google/callback', passport.authenticate('google'))
}


// Hi, I'm really sorry that I act like the type of person that I hate. Like not responding you properly and timely. Because of the anonymity and the amount of connections we have via dating sites, social media and online messaging, it has become very easy to cease chatting giving any reason. I don't want to act like that. The reason of my silence is, that I couldn't make up my mind yet about this week's things to do. Can we possibly do the pub gathering sometime like the next week if possible and if still OK for you? Also I'd prefer a friendshiplike relationship in the beginning without any expectation. Sorry about being like this and I hope you understand me. Have a great Sunday!