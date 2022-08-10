const title = document.getElementsByTagName('h1')[0]                                                           //
console.log(title)
//-------------------------------------------------------------------------

const btnCalculate = document.getElementsByClassName('handler_btn')[0]
console.log(btnCalculate)                                                                                   //

const btnreset = document.getElementsByClassName('handler_btn')[1]
console.log(btnreset)                                                                                       //
//------------------------------------------------------------------------

const btnScreen = document.querySelector('.screen-btn')
console.log(btnScreen)
//-----------------------------------------------------------------------

const percent = document.querySelectorAll('.other-items.percent')
console.log(percent)

const number = document.querySelectorAll('.other-items.number ')
console.log(number)
//------------------------------------------------------------------------

const input = document.querySelector('.rollback input[type="range"]')
console.log(input)
//-----------------------------------------------------------------------

const span = document.querySelector('.rollback .range-value')
console.log(span)
//----------------------------------------------------------------------

const layoutCost = document.getElementsByClassName("total-input")[0]
const numberScreens = document.getElementsByClassName("total-input")[1]
const additionalServices = document.getElementsByClassName("total-input")[2]
const theTotalCost = document.getElementsByClassName("total-input")[3]
const costIncludingRollback = document.getElementsByClassName("total-input")[4]
console.log(layoutCost, numberScreens, additionalServices, theTotalCost, costIncludingRollback)
//-----------------------------------------------------------------------

let screen = document.querySelectorAll('.screen')
console.log(screen)