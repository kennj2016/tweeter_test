const generalRepo = require('../repository/general')
const moment = require('moment')
const authModel = require('../auth/auth.model')

exports.transformDataContent = async (content) => {
      if (!content) return
      content.created_at_format = moment(content.created_at).fromNow();
      content.user = await authModel.findUser({ id: content.user_id })
      return content
}

exports.createContent = async (data) => {
      return await generalRepo.setData('contents', 'user_id, description', [data])
}

exports.findContent = async (id) => {
      let content = await generalRepo.findOne('contents', '*', `id = ${id}`)
      content = await this.transformDataContent(content)
      return content
}
exports.listTweets = async (data) => {
      let tweets = await generalRepo.getData('contents', '*', `deleted_at IS NULL`)
      tweets = await Promise.all(
            tweets.map(async (el) => {
                  el = this.transformDataContent(el)
                  return el
            })
      )
      return tweets
}