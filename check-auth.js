const jwt= require('jsonwebtoken');

module.exports=(req, res, next)=>{
    try{
        const token=req.headers.authorization.split(' ')[1];

        if (!token) 
        return res.send({ auth: false, message: 'No token provided.' });    

        jwt.verify(token, process.env.JWT_KEY, function(err, decoded) {
            if (err) 
            return res.send({ auth: false, message: 'Failed to authenticate token.' });

          else //return res.status(200).send(decoded);
        next();
        });

    }
    catch(error){
        return res.status(401).json({message: 'Authentication failed.'});
    }
};