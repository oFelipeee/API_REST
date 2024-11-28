const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const token = req.headers.authorization
    console.log(token)
    if (!token) {
        return res.status(401).json({
            msg: 'Acesso negado'
        })
    }

    jwt.verify(token, process.env.SECRET, (err, admin) => {
        if (err) {
            return res.status(403).json({
                msg: 'Acesso negado!'
            })
        }
        req.admin = admin;

        next();

    })


};

module.exports = authenticateToken;