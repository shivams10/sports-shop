const currencyFormatter = new Intl.NumberFormat(undefined, {currency:"INR"
,style: "currency"})

export function FormatCurrency(number: number) {
    return currencyFormatter.format(number)
}