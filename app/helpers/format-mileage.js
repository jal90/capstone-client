import { helper } from '@ember/component/helper'

export function formatMileage (params/*, hash */) {
  const mileage = params[0]

  const mileageWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  if (mileage !== null && mileage !== undefined) {
    return mileageWithCommas(mileage) + ' miles'
  } else {
    return 'N/A'
  }
}

export default helper(formatMileage)
