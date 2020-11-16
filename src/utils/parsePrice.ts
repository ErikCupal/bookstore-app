const parsePrice = (price: string): number => {
  const [integerPart, decimalPart] = price.split(/[.,]/)

  return (Number(integerPart || 0) * 100 + Number(decimalPart || 0)) / 100
}

export default parsePrice
