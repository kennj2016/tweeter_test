const server = require('./app')
const {PORT} = process.env

server.listen(PORT, () => {
      console.log(`server running at PORT :: ${PORT}`);
})