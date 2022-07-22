import { Router } from "express"

import validateSchema from "@/middlewares/validateSchemaMiddleware"
import handleError from "@/middlewares/handlerErrorMiddleware"

const router = Router()

router.use(handleError)

export default router
