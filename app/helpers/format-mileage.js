import { helper } from '@ember/component/helper'

export function formatMileage (params/*, hash */) {
  const mileage = params[0]
  console.log(params[0])
  const mileageWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  return mileageWithCommas(mileage)
}

export default helper(formatMileage)
