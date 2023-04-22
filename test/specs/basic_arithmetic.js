const cal_objects = require('../pageobjects/calculator_objects')
var assert = require('assert')

describe('Basic Arithmetic Operations', () => {

    var a = 8, b = 4

    it('Plus operation', async() => {

        await cal_objects.calNum(a).click()
        await cal_objects.plusBtn.click()
        await cal_objects.calNum(b).click()
        await cal_objects.equalBtn.click()
        result = await cal_objects.getResult.getText()

        assert.equal(result, a+b)
    })

    it('Minus operation', async() => {

        await cal_objects.clearField.click()
        await cal_objects.calNum(a).click()
        await cal_objects.minusBtn.click()
        await cal_objects.calNum(b).click()
        await cal_objects.equalBtn.click()
        result = await cal_objects.getResult.getText()

        assert.equal(result, a-b)
    })

    it('Multiply operation', async() => {

        await cal_objects.clearField.click()
        await cal_objects.calNum(a).click()
        await cal_objects.multiplyBtn.click()
        await cal_objects.calNum(b).click()
        await cal_objects.equalBtn.click()
        result = await cal_objects.getResult.getText()

        assert.equal(result, a*b)
    })

    it('Divide operation', async() => {

        await cal_objects.clearField.click()
        await cal_objects.calNum(a).click()
        await cal_objects.divideBtn.click()
        await cal_objects.calNum(b).click()
        await cal_objects.equalBtn.click()
        result = await cal_objects.getResult.getText()

        assert.equal(result, a/b)
    })
})