const idCounter: { [prefix: string]: number } = {}

const uniqueIdGenerator = (prefix = '_default_'): string => {
  if (!idCounter[prefix]) {
    idCounter[prefix] = 0
  }

  const id = ++idCounter[prefix]
  if (prefix === '_default_') {
    return `${id}`
  }

  return `${prefix}${id}`
}

export default uniqueIdGenerator
