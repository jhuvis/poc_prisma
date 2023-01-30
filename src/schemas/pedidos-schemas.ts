import Joi from "joi";

export const createPedidosSchema = Joi.object({
  nome: Joi.string().required(),
  endereco: Joi.string().required(),
  total: Joi.number().required(),
});