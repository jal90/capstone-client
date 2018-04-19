import { helper } from '@ember/component/helper'

export function formatMileage (params/*, hash */) {
  const mileage = params[0]

  const mileageWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  if (mileage !== undefined) {
    return mileageWithCommas(mileage)
  }
}

export default helper(formatMileage)
