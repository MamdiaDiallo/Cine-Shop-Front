const currentFormatter = new Intl.NumberFormat(undefined, {currency:"USD", style:"currencey"})



export function formatCurrency(num: number){
    return currentFormatter.format(num)
}