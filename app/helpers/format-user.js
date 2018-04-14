import { helper } from '@ember/component/helper'

export function formatUser (params /*, hash */) {
  // params is an array with one element: user (which is an email)
  // take that element and split it at the @ sign
  const splitNameFromEmail = params[0].split('@')
  // save the name without the @domain.com part
  const plainName = splitNameFromEmail[0]
  // capitalize it!
  const capitalizedName = plainName[0].toUpperCase() + plainName.substring(1)
  return capitalizedName
}

export default helper(formatUser)
