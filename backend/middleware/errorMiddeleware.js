export const errorHnadeler = (err,req,res,next) => {
    const statusCode = res.statusCode ?  res.statusCode : 500
    res.status(statusCode)
    res.json({msge: "Serverr error"})
    stack: process.env.NODE_ENV === 'production' ? null: err.stack
}