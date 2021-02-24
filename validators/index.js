exports.createPostValidator = (req,res,next)=>{
    
    //title checking
    req.check('title',"write a title please").notEmpty();
    req.check('title',"length oft title must be between 4 and 150 characters").isLength({
        min:4, max:150
    });

    //body checking
    req.check('body',"write a body please").notEmpty();
    req.check('body',"length of body must be between 4 to 50 characters").isLength({
        min:4, max :150
    })

    //check for errors
    const errors = req.validationErrors();

    //if error show the first one as they happen
    if(errors)
    {
        const firstError = errors.map(error=>error.msg)[0];
        return res.status(400).json({
            error:firstError
        });
    }
    //proceed to the next middle ware
    next();
}