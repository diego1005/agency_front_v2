const formatCurrency = (number) =>
  new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(number)

export const formatTwoDigits = (number) =>
  new Intl.NumberFormat('es-AR', {
    // minimumIntegerDigits: 2,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: false,
  }).format(number)

export default formatCurrency
