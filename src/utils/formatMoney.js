export const formatMoney = (price) => {

    const currency_symbol = "₺"

    const currency = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
        minimumFractionDigits: 2,
    });
    const result = currency.format(price).substring(1) + currency_symbol
    return result
}