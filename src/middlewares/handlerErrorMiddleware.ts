import { NextFunction, Request, Response } from "express"

const handleError = (err: AppError | Error, req: Request, res: Response, next: NextFunction) => {
	console.error(err)
	if (err instanceof AppError) return res.status(err.statusCode).send(err.message)
	return res.status(500).send({ message: "Internal server error" })
}

export default handleError
