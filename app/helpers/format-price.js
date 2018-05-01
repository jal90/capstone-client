import { helper } from '@ember/component/helper'

export function formatPrice (params) {
  const price = params[0]
  if (price === null) {
    return 'N/A'
  }
  return '$' + parseFloat(Math.round(price * 100) / 100).toFixed(2)
}

export default helper(formatPrice)
