const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  console.log('Authorization Header:', req.headers['authorization']); // Log the header
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ error: "Authorization header missing or invalid" });
  }

  const token = authHeader.split(' ')[1]; // Extract token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Token decoded:', decoded); // Log decoded token
    req.userId = decoded.userId; // Set userId in request for later use
    next();
  } catch (error) {
    console.error('Failed to authenticate token:', error);
    return res.status(401).json({ error: "Invalid or expired token" });  }
};

module.exports = authenticateUser;
