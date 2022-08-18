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
    inputRangeValue: 0,
    //-------------------------------------------------------------------------

    init: function () {
        this.addTitle()
        resetBtn.addEventListener('click', this.reset.bind(this))
        startBtn.addEventListener('click', this.start.bind(this))
        buttonPlus.addEventListener('click', this.addScreenBlock.bind(this))
        inputRange.addEventListener('input', this.range.bind(this))
        
    },
    //------------------------------------------------------------------------
    disable: function(){
        screens = document.querySelectorAll('.screen')
        screens.forEach( (screen) => {
        const select = screen.querySelector('select')
        const input = screen.querySelector('input')
        select.disabled = true;
        input.disabled = true;
        startBtn.style.display = 'none'
        resetBtn.style.display = 'block'
    })},
    //----------------------------------------------------------------------
    reset: function(){
        screens = document.querySelectorAll('.screen')
        screens.forEach( (screen) => {
        const select = screen.querySelector('select')
        const input = screen.querySelector('input')
        select.disabled = false;
        input.disabled = false;
        select.value = '';
        input.value = '';
        total.value = 0;
        this.screens = [];
        cloneScreen = screens[0].remove(screens)
        otherItemsPercent.forEach( (item) => {
            const check = item.querySelector('input[type=checkbox]')
            check.checked = false;
        });
        otherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]')
            check.checked = false;
        });
        totalCount.value = 0;
        totalCountOther.value = 0;
        fullTotalCount.value = 0;
        totalCountRollback.value = 0;
        inputRangeValue.textContent = 0 + '%';
        inputRange.value = 0;
        startBtn.style.display = 'block'
        resetBtn.style.display = 'none'
    })  
    },
    //------------------------------------------------------------------------
    addTitle: function () {
        document.title = title.textContent; 
    },
    //---------------------------------------------------------------------

    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true)
        screens[screens.length - 1].before(cloneScreen)
        screens[screens.length - 1].after(cloneScreen)
        cloneScreen.querySelector('input').value = '';
    },
    //-----------------------------------------------------------------------

    showResult: function(){
        total.value = this.screenPrice
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber
        fullTotalCount.value = +total.value + +totalCountOther.value
        totalCountRollback.value = +fullTotalCount.value + +fullTotalCount.value * (this.rollback / 100)
        totalCount.value = this.screens.reduce((sum, current) => sum + current.count, 0);
    },
    range: function() {
        this.rollback = +inputRange.value
        inputRangeValue.textContent = this.rollback + "%"
    },
    //----------------------------------------------------------------------------

    addScreens: function(){
        screens = document.querySelectorAll('.screen')
        screens.forEach( (screen, index) => {
        const select = screen.querySelector('select')
        const input = screen.querySelector('input')
        const selectName = select.options[select.selectedIndex].textContent
            this.screens.push({
                id: index, 
                name: selectName, 
                price: +select.value * +input.value,
                count: +input.value 
            })
        }) 
    },
    //-------------------------------------------------------------------------------

    addServices: function () {
        otherItemsPercent.forEach( (item) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value
            } 
        })
        otherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value
            }
        })  
    },
    //-----------------------------------------------------------------------------

    addPrices: function () {
        this.screenPrice = this.screens.reduce((sum, current) => sum + current.price, 0);
        for (let key in this.servicesNumber){
            this.servicePricesNumber += this.servicesNumber[key];
        }
        for (let key in this.servicesPercent){
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
        }
        this.fullPrice =  this.screenPrice + this.servicePricesPercent + this.servicePricesPercent      
    },
    //---------------------------------------------   

    start: function(){
        this.addScreens();
        let check = true
        if (this.screens.length > 0) {
            this.screens.forEach((item) =>{
                if (item.name === 'Тип экранов'|| item.count === ''|| parseInt(item.count) < 1) check = false
                     else{
                    check = true
                }   
            })
            if (check) {
                this.disable();
                this.addServices();
                this.addPrices(); 
                this.showResult();

            }}
        
    },
}

appData.init();