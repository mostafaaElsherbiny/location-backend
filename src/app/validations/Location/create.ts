import Joi from "joi";
import { middleware } from "../../utils/validator";
const validations = Joi.object({
  title: Joi.string().required(),
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
});
export default { createLocationValidationSchemas: middleware(validations) };
