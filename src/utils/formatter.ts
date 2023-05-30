export const dateFormatter = new Intl.DateTimeFormat('pt-BR')
export const dateFormatter2 = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: 'long',
})
export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
