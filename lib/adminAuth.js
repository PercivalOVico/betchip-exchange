import jwt from 'jsonwebtoken';

const signToken = (admin) => {
  return jwt.sign(admin, process.env.JWT_SECRET, {
    expiresIn: '2min',
  });
};

const isAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // BEARER XXX
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Token is not valid' });
      } else {
        req.admin = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'Token is not suppiled' });
  }
};
export { signToken, isAuth };
