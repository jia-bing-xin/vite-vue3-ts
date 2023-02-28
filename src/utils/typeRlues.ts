export const isNumber = (num) => typeof (num) === 'number' && !Number.isNaN(num)
export const isString = (num) => typeof (num) === 'string'
export const isStrNumOrNum = (num) => isNumber(num) || (isString(num) && !isNaN(Number(num)))