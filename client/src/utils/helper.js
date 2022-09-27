export const checkObjectEmptyOrNull = (object) => {
      return  !object || (object &&  Object.keys(object).length === 0)
}