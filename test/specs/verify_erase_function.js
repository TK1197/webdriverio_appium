const cal_objects = require('../pageobjects/calculator_objects')
var assert = require('assert')

describe('Validate erase function by removing one text', () => {

    var a = 8, b = 4

    it('Erase operation', async() => {

        //8+4
        await cal_objects.calNum(a).click()
        await cal_objects.plusBtn.click()
        await cal_objects.calNum(b).click()

        //get the before and after value state => 8+
        original_value = await cal_objects.beforeClearFieldState.getText()
        await cal_objects.deleteBtn.click()
        after_remove_one_digit = await cal_objects.beforeClearFieldState.getText()

        //8+
        assert.equal(after_remove_one_digit, original_value.slice(0, -1))
    })

    it('Clear operation', async() => {

        await cal_objects.clearField.click()
        after_clear_state = await cal_objects.completeClearOption.getText()

        assert.equal(after_clear_state, original_value.replace(original_value, ''))
    })
})