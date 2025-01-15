import React from "react"

function removeLeadingZero(num) {
  return num.replace(/^0+/, "")
}

function ConvertDate(month, year) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const splicedMonth = removeLeadingZero(month)
  const monthNum = parseInt(splicedMonth)
  const monthName = months.filter((element, index) => {
    return index + 1 === monthNum
  })
  const combinedDate = monthName + " " + year

  return combinedDate
}

export default ConvertDate
