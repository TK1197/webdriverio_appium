const cal_objects = require('../pageobjects/calculator_objects')
var assert = require('assert')

describe('Validate decimal calculation and complex arithmetic operations', () => {

    var a = '8978', b = '0.25'

    it('Decimal operation', async () => {

        customTapOnKeyPad(a)
        await cal_objects.plusBtn.click()
        customTapOnKeyPad(b)
        await cal_objects.equalBtn.click()

        result = await cal_objects.getResult.getText()
        console.log(result)

        expectedResult = parseFloat(a) + parseFloat(b)
        assert.equal(result, expectedResult)
    })

    function customTapOnKeyPad(numeric) {

        for (i = 0; i < numeric.length; i++) {

            keyInDigit = numeric.toString().charAt(i)

            switch (keyInDigit) {
                case '0':
                    cal_objects.calNum(keyInDigit).waitForExist({ timeout: 5000 })
                    cal_objects.calNum(keyInDigit).click()
                    break;

                case '1':
                    cal_objects.calNum(keyInDigit).waitForExist({ timeout: 5000 })
                    cal_objects.calNum(keyInDigit).click()
                    break;

                case '2':
                    cal_objects.calNum(keyInDigit).waitForExist({ timeout: 5000 })
                    cal_objects.calNum(keyInDigit).click()
                    break;

                case '3':
                    cal_objects.calNum(keyInDigit).waitForExist({ timeout: 5000 })
                    cal_objects.calNum(keyInDigit).click()
                    break;

                case '4':
                    cal_objects.calNum(keyInDigit).waitForExist({ timeout: 5000 })
                    cal_objects.calNum(keyInDigit).click()
                    break;

                case '5':
                    cal_objects.calNum(keyInDigit).waitForExist({ timeout: 5000 })
                    cal_objects.calNum(keyInDigit).click()
                    break;

                case '6':
                    cal_objects.calNum(keyInDigit).waitForExist({ timeout: 5000 })
                    cal_objects.calNum(keyInDigit).click()
                    break;

                case '7':
                    cal_objects.calNum(keyInDigit).waitForExist({ timeout: 5000 })
                    cal_objects.calNum(keyInDigit).click()
                    break;

                case '8':
                    cal_objects.calNum(keyInDigit).waitForExist({ timeout: 5000 })
                    cal_objects.calNum(keyInDigit).click()
                    break;

                case '9':
                    cal_objects.calNum(keyInDigit).waitForExist({ timeout: 5000 })
                    cal_objects.calNum(keyInDigit).click()
                    break;

                case '.':
                    cal_objects.calNum(keyInDigit).waitForExist({ timeout: 5000 })
                    cal_objects.calNum(keyInDigit).click()
                    break;
            }
        }
    }
})