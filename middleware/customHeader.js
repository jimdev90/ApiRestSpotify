

const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key;
        if (apiKey === 'leifer-01'){
            next();
        }else {
            res.status(403);
            res.send({ error : 'API_KEY_INCORRECTA'})
        }
    }catch (e) {
        res.status(403);
        res.send({ error : 'ERROR'})
    }

}

module.exports = customHeader;