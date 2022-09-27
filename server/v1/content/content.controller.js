const contentModel = require('../content/content.model')

exports.createTweet = async (req, res, next) => {
      try {
            const id = req._id
            const {description} = req.body
            const paramInsert = [id, description]
            const tweetId = await contentModel.createContent(paramInsert)
            const content = await contentModel.findContent(tweetId)
            return res.sendSuccess('Create tweet success', content)
      } catch (e) {
            console.log(e);
            return res.sendError(e.message)
      }
}

exports.listTweets = async (req, res, next) => {
      try {
            const tweets = await contentModel.listTweets()
            return res.sendSuccess('Get list tweet success', tweets)
      } catch (e) {
            console.log(e);
            return res.sendError(e.message)
      }
}