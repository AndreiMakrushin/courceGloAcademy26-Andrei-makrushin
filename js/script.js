const title = document.getElementsByTagName('h1')[0]
//------------------------------------------------------------------

const buttonPlus = document.querySelector('.screen-btn')
//----------------------------------------------------------------------

const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')
//---------------------------------------------------------------------

const inputRange = document.querySelector('.rollback input')
const spanRang = document.querySelector('.rollback .range-value')
//----------------------------------------------------------------------

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]
//---------------------------------------------------------------------

const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]
//----------------------------------------------------------------------

let screens = document.querySelectorAll('.screen')
//------------------------------------------------------------------------

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    count: 0,
    rollback: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function () {
        appData.addTitle()
        startBtn.addEventListener('click', appData.start)
        inputRange.addEventListener('input', function (event) {
        appData.rollback = event.target.value 
        spanRang.textContent = event.target.value + '%'
        }),
         buttonPlus.addEventListener('click', appData.addScreenBlock)
    },
    //----------------------------------------------------------------------

    addTitle: function () {
        document.title = title.textContent
    },
    //--------------------------------------------------------------------

    addScreenBlock: function () {
        const clonScreen = screens[0].cloneNode(true)
        screens[screens.length - 1].after(clonScreen)
    },
    //--------------------------------------------------------------------

    showResult: function () {
        total.value = appData.screenPrice
        totalCount.value = appData.count
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
        fullTotalCount.value = appData.fullPrice
        totalCountRollback.value = appData.servicePercentPrice
    },
    //-------------------------------------------------------------------
    addScreens: function () {
        let screens = document.querySelectorAll('.screen')
        appData.screens = [];
        screens.forEach(function (screen, index) {
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
        console.log(appData.screens)
    },
    //---------------------------------------------------------------------
    
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }
        for (let screen of appData.screens) {
            appData.count += +screen.count
        }
        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key]
        }
        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
        }
        appData.fullPrice = +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (+appData.rollback / 100))
    },
    //---------------------------------------------------------------------

    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value
            }
        })
        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value
            }
        })
    },
    //-------------------------------------------------------------------------
    start: function () {
        appData.addScreens()
        let checkScreens = true
        if (appData.screens.length > 0) {
            appData.screens.forEach(function (item) {
                if (item.name === 'Тип экранов' || item.count === '' || parseInt(item.count) < 1) checkScreens = false, alert('Введите тип экрана и желаемое количество')
            })
        } else {
            checkScreens = false
        }
        if (checkScreens) {
            appData.addServices()
            appData.addPrices()
            appData.showResult()
        }
    },
}

appData.init()