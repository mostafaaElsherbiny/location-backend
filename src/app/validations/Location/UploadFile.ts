import Joi from "joi";
import { middleware } from "../../utils/validator";
const validations = Joi.object({
  file: Joi.object({
    filename: Joi.string().required(),
    path: Joi.string().required(),
    fieldname: Joi.string().required(),
    originalname: Joi.string().required(),
    encoding: Joi.string().required(),
    mimetype: Joi.string()
      .valid("image/jpeg", "image/png", "image/gif")
      .required(),
    size: Joi.number().required().max(1000000),
    destination: Joi.string().required(),
  }).required(),
});
export default middleware(validations);
