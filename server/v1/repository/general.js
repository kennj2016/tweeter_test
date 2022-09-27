const pool  = require('../config/db.config');

exports.findOne = async (model, column, query) => {
      return new Promise((resolve, reject) => {
            let sql = `SELECT ${column} FROM ${model} WHERE ${query} `
            pool.query(sql, [], (err, rows) => {
                  if(err){
                        return reject(err)
                  }
                  let result = rows.length > 0 ? rows[0] : null
                  return resolve(result)
            })
      })
}

exports.getData = async (model, column, query) => {
      return new Promise((resolve, reject) => {
            let sql = `SELECT ${column} FROM ${model} WHERE ${query}`
            pool.query(sql, [], (err, rows) => {
                  if(err){
                        return reject(err)
                  }
                  return resolve(rows)
            })
      })
}

exports.setData = async (model, column, data) => {
      return new Promise((resolve, reject) => {
            let sql = `INSERT INTO ${model} (${column}) VALUES ?`
            pool.query(sql, [data], (err, rows) => {
                  if(err){
                        return reject(err)
                  }
                  return resolve(rows.insertId)
            })
      })
}

exports.updateOne = async (model, update, conditions) => {
      return new Promise((resolve, reject) => {
            let sql = `UPDATE ${model} SET ${update} WHERE ${conditions} `
            pool.query(sql, [], (err, rows) => {
                  if(err){
                        return reject(err)
                  }
                  return resolve(rows)
            })
      })
}

exports.deleteOne = async (model,conditions) => {
      return new Promise((resolve, reject) => {
            let sql = `DELETE FROM ${model} WHERE ${conditions}`
            pool.query(sql, [], (err, rows) => {
                  if(err){
                        return reject(err)
                  }
                  return resolve(rows)
            })
      })
}

exports.getAll = async (model, column, conditions, orderBy) => {
      return new Promise((resolve, reject) => {
            const order = orderBy ? `ORDER BY  ${orderBy}` : ''
            const query = conditions ? `WHERE ${conditions}` : ''
            const selectColumn = column ? column : '*'
            let sql = `SELECT ${selectColumn} FROM ${model} ${query} ${order} `
            pool.query(sql, [], (err, rows) => {
                  if(err){
                        return reject(err)
                  }
                  return resolve(rows)
            })
      })
}

exports.countRow = async (model, conditions) => {
      let query = conditions ? `WHERE ${conditions}` : ''
      return new Promise((resolve, reject) => {
            let sql = `SELECT COUNT(*) as number FROM ${model} ${query} `
            pool.query(sql, [], (err, rows) => {
                  if(err){
                        return reject(err)
                  }
                  return resolve(rows[0].number)
            })
      })
}

exports.deleteAll = async (model) => {
      return new Promise((resolve, reject) => {
            let sql = `DELETE FROM ${model}`
            pool.query(sql, [], (err, rows) => {
                  if(err){
                        return reject(err)
                  }
                  return resolve(rows)
            })
      })
}

exports.updateAll = async (model, update) => {
      return new Promise((resolve, reject) => {
            let sql = `UPDATE ${model} SET ${update}`
            pool.query(sql, [], (err, rows) => {
                  if(err){
                        return reject(err)
                  }
                  return resolve(rows)
            })
      })
}