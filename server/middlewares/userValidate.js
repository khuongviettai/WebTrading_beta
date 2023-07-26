const jwt = require("jsonwebtoken");

const userValidate = {
  verifyToken: (req, res, next) => {
    const token = req.header.token;
    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, process.env.Token_Key, (err, user) => {
        if (err) {
          res.status(403);
        }
        req.user = user;
        next();
      });
    } else {
      res.status(401);
    }
  },
};

module.exports = userValidate;
