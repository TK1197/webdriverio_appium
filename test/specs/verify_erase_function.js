const cal_objects = require('../pageobjects/calculator_objects')
var assert = require('assert')

describe('Validate erase function by removing one text', () => {

    var a = 8, b = 4

    it('Erase operation', async() => {

        /*await $(`//android.widget.ImageButton[contains(@content-desc,"${a}")]`).click()
        await $("//android.widget.ImageButton[@content-desc='plus']").click()
        await $(`//android.widget.ImageButton[contains(@content-desc,"${b}")]`).click()*/

        cal_objects.calNum(a).click()
        cal_objects.plusBtn.click()
        cal_objects.calNum(b).click()

        //get the before and after value state
        original_value = await cal_objects.beforeClearFieldState.getText()
        await cal_objects.deleteBtn.click()
        after_remove_one_digit = await cal_objects.beforeClearFieldState.getText()

        assert.equal(after_remove_one_digit, original_value.slice(0, -1))
    })

    it('Clear operation', async() => {

        await cal_objects.clearField.click()
        after_clear_state = await cal_objects.completeClearOption.getText()

        assert.equal(after_clear_state, original_value.replace(original_value, ''))
    })
})