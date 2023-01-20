import { ObjectSchema } from "joi"
import { Request, Response, NextFunction } from "express"

import { UnprocessableEntityError } from "@/errors"

const validateSchema = (schema: ObjectSchema) => {
	return (req: Request, res: Response, next: NextFunction) => {
		const { error } = schema.validate(req, { abortEarly: false })
		if (error)
			throw new UnprocessableEntityError(
				error.details
					.map(detail => detail.message.replace(/"/g, ""))
					.join(", ")
			)
		next()
	}
}

export default validateSchema
