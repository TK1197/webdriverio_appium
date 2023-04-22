const cal_objects = require('../pageobjects/calculator_objects')
var assert = require('assert')

describe('Validate calculator keypad numbers and symbols', () => {

    it('Validate numbers in keypad', () => {

        arrayOfNumbersAndSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'minus', 'multiply', 
        'divide', 'plus', 'percent', 'left or right parenthesis', 'clear', 'point', 'delete', 'equals']

        for(i = 0; i < arrayOfNumbersAndSymbols.length; i++){
        
            cal_objects.calNum(arrayOfNumbersAndSymbols[i]).isExisting()
            //$(`//android.widget.ImageButton[contains(@content-desc,'${arrayOfNumbersAndSymbols[i]}')]`).isExisting()
        }
    })
})