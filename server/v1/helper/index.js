const moment = require('moment')

module.exports = {
      checkDataType: function (value)  {
            return Object.prototype.toString.call(value).slice(8,-1).toLowerCase()
      },
      getCurrentDate: function () {
            return  moment(new Date(), 'MM-DD-YYYY HH:mm:ss').format("YYYY-MM-DD HH:mm:ss")
      },
      checkObjectNotEmpty : (object) => {
            return  Object.prototype.toString.call(object).slice(8,-1).toLowerCase() === 'object' && Object.keys(object).length > 0
      },
};
