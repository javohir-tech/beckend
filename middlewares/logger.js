const logger = function(req, res, next){
    console.log("post Logger")
    next()
}

module.exports = logger