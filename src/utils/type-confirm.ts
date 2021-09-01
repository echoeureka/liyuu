type ConfirmType = 'object' | 'date' | 'null' | 'undefined'

const getType = (obj: any) => Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()

const typeConfirm = (obj: any, _type: ConfirmType) => getType(obj) === _type

export { getType, typeConfirm }
