const title = document.getElementsByTagName('h1')[0]                                                           //
//-------------------------------------------------------------------------

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]
//------------------------------------------------------------------------

const buttonPlus = document.querySelector('.screen-btn')
//-----------------------------------------------------------------------

const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number ')
//------------------------------------------------------------------------

const inputRange = document.querySelector('.rollback input[type="range"]')
const inputRangeValue = document.querySelector('.rollback .range-value')
//----------------------------------------------------------------------

const total = document.getElementsByClassName("total-input")[0]
const totalCount = document.getElementsByClassName("total-input")[1]
const totalCountOther = document.getElementsByClassName("total-input")[2]
const fullTotalCount = document.getElementsByClassName("total-input")[3]
const totalCountRollback = document.getElementsByClassName("total-input")[4]
//-----------------------------------------------------------------------

let screens = document.querySelectorAll('.screen')


const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    rollback: 0,
    //-------------------------------------------------------------------------

    init: function () {
        appData.addTitle()
        startBtn.addEventListener('click', appData.start)
        buttonPlus.addEventListener('click', appData.addScreenBlock)
        inputRange.addEventListener('input', appData.range)
        
    },
    
    //------------------------------------------------------------------------
    range: function() {
        inputRangeValue.value =+(appData.rollback = +inputRange.value)
        inputRangeValue.textContent = inputRangeValue.value + "%"

    },

    addTitle: function () {

        document.title = title.textContent; 
    },
    //---------------------------------------------------------------------

    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true)
        screens[screens.length - 1].after(cloneScreen)
        console.log(cloneScreen)
    },
    //-----------------------------------------------------------------------

    showResult: function(){
        total.value = appData.screenPrice
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
        fullTotalCount.value = +total.value + +totalCountOther.value
        totalCountRollback.value = +fullTotalCount.value + +fullTotalCount.value * (inputRangeValue.value / 100)
        totalCount.value = appData.screens.reduce((sum, current) => sum + current.count, 0);
    },
    //----------------------------------------------------------------------------

    addScreens: function(){
        screens = document.querySelectorAll('.screen')
        screens.forEach(function(screen, index) {
        const select = screen.querySelector('select')
        const input = screen.querySelector('input')
        const selectName = select.options[select.selectedIndex].textContent
            appData.screens.push({
                id: index, 
                name: selectName, 
                price: +select.value * +input.value,
                count: +input.value
                
            })
        })
        
    },
    //-------------------------------------------------------------------------------

    addServices: function () {
        otherItemsPercent.forEach(function(item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value
            }
            
        })
        otherItemsNumber.forEach(function(item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value
            }
            
        })
        
    },
    //-----------------------------------------------------------------------------

    addPrices: function () {
        appData.screenPrice = appData.screens.reduce((sum, current) => sum + current.price, 0);
        for (let key in appData.servicesNumber){
            appData.servicePricesNumber += appData.servicesNumber[key];
        }
        for (let key in appData.servicesPercent){
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
        }
        appData.fullPrice =  appData.screenPrice + appData.servicePricesPercent + appData.servicePricesPercent      
    },
    //---------------------------------------------   

    start: function(){
        appData.addScreens();
        let check = true;
        if (appData.screens.length > 0) {
            appData.screens.forEach(function(item) {
                if (item.name === 'Тип экранов' || item.count === '' || parseInt(item.count) < 1) check = false
            })}
        if (check) {
            appData.addServices();
            appData.addPrices(); 
            appData.showResult();
        }
    },
}

appData.init();