import { CURRENCY_UNIT } from '../constants/currencyUnit'

const formatCurrency = (value: number) => `${CURRENCY_UNIT}${value.toFixed(2)}`

export default formatCurrency
