import Joi from '@hapi/joi'
import PasswordComplexity from 'joi-password-complexity'

const passwordComplexityOptions = {
    min: 3,
    max: 255,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 0,
}

export default Joi.object({
    login: Joi.string().required(),
    password: PasswordComplexity(passwordComplexityOptions).required(),
    age: Joi.number().integer().min(4).max(130).required(),
    isDeleted: Joi.boolean().required(),
})
