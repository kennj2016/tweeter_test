const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
      const authHeader = req.header('Authorization');
      const token = authHeader && authHeader.split(' ')[1];

      if (!token) {
            return res.sendError('No token provided!', 403)
      }
      try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            // decoded = Object jwt sign
            req._id = decoded._id;
            next();
      } catch (e) {
            return res.sendError('Unauthorized !', 401)
      }
}
