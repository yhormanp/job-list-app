export const catchErrors = fn =>
    function errorHandler(req, res, next) {
        return fn(req, res, next).catch(next);
    };




export const notFound = (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
}

export const developmentErrors = (err, req, res, next) => {
    const errorDetails = {
        message: err.message,
        status: err.status,
        stack: err.stack || ''
    };

    res.status(err.status || 500);
    res.json( {error: errorDetails})
}