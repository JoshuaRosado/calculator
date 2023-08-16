class Calculator{
    constructor(processNumberTextElement, resultNumberTextElement){
        this.processNumberTextElement = processNumberTextElement
        this.resultNumberTextElement = resultNumberTextElement
        this.clear()

        // ∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆Functions by buttons∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

    }
    addNumber(number){
        if( number === '.' && this.resultNumber.includes('.')) return
        this.resultNumber = this.resultNumber.toString() + number.toString()



    }
    clear(){
        this.resultNumber = ''
        this.processNumber = ''
        this.operation = undefined
    

    }
    delete(){
        this.resultNumber = this.resultNumber.toString().slice(0, -1)

    }

    operationSelected(operation){
        if(this.resultNumber === '') return
        if(this.processNumber !== ''){
            this.math()
        }
        this.operation = operation
        this.processNumber = this.resultNumber
        this.resultNumber =''

    }
    math(){
        let maths
        let process = parseFloat(this.processNumber)
        let result = parseFloat(this.resultNumber)
        if(isNaN(process) || isNaN(result)) return
        switch (this.operation){
            case '+':
                maths = process + result
                break
            case '-':
                maths = process - result
                break
            case 'x':
                maths = process * result
                break
            case '÷':
                maths = process / result
                break
                default:
                return
        }
        this.resultNumber = maths
        this.operation = undefined
        this.processNumber = ''
    }

displayNum(number){
    let stringNum = number.toString()
    let intDigits = parseFloat(stringNum.split('.')[0])
    let decimalDigits = stringNum.split('.')[1]
    let intDisplay
    if(isNaN(intDigits)){
        intDisplay = ''
    } else {
        intDisplay = intDigits.toLocaleString('en', {maximumFractionDigits: 0})
    }
    if(decimalDigits != null) {
        return `${intDisplay}.${decimalDigits}`
    } else{
        return intDisplay
    }



    }
    updateScreen(){
        this.resultNumberTextElement.innerText = this.displayNum(this.resultNumber)
        if(this.operation != null){
            this.processNumberTextElement.innerText =
            `${this.displayNum(this.processNumber)} ${this.operation}`
        }else{

            this.processNumberTextElement.innerText = ''
        }
    }
}


// ∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆ Variables ∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆
let numberBtn = document.querySelectorAll('[data-number]')
let operationBtn = document.querySelectorAll('[data-operations]')
let equalsBtn = document.querySelector('[data-equal]')
let delBtn = document.querySelector('[data-delete]')
let allClearBtn = document.querySelector('[data-clear]')
let processNumberTextElement = document.querySelector('[data-process]')
let resultNumberTextElement = document.querySelector('[data-results]')

let calculator = new Calculator(processNumberTextElement, resultNumberTextElement)

// ∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆ FUNCTIONS ∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆
numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addNumber(button.innerText)
        calculator.updateScreen()
    })
})

operationBtn.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.operationSelected(button.innerText)
        calculator.updateScreen()
    })
})

equalsBtn.addEventListener('click', button => {
    calculator.math()
    calculator.updateScreen()
})

allClearBtn.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateScreen()
})

delBtn.addEventListener('click', button => {
    calculator.delete()
    calculator.updateScreen()
})

// ∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆ SHADOW EFFECT ∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆


function addBtnShadow(btn){
    btn.classList.add("btnShadow");
}

function removeBtnShadow(btn){
    btn.classList.remove("btnShadow");
}

function whiteShadow(btn){
    btn.classList.add('whiteShadow');
}

function removeWhiteShadow(btn){
    btn.classList.remove('whiteShadow');
}

// ∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆ X ∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆