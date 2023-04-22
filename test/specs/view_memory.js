const cal_objects = require('../pageobjects/calculator_objects')
var assert = require('assert')

describe('Basic Arithmetic Operations', () => {

    var a = 8, b = 4

    it('Plus operation', async () => {

        await cal_objects.calNum(a).click()
        await cal_objects.plusBtn.click()
        await cal_objects.calNum(b).click()
        await cal_objects.equalBtn.click()
        result = await cal_objects.getResult.getText()
        console.log(result)

        assert.equal(result, a + b)
    })

    it('View Memory and clean it', async () => {

        const screen = await cal_objects.dragHandleViewer

        await screen.touchAction([
            'press',
            { action: 'moveTo', x: 538, y: 1758 },
            'release'
        ])

        driver.pause(5000)

        await cal_objects.moreOptionBtn.click()
        await cal_objects.historyBtn.click()
        await cal_objects.moreDetailBtn.click()
        await cal_objects.generalTextField('Clear').click()
        await cal_objects.generalTextField('Clear history and memory?').click()
        await cal_objects.clearHistoryPermanently.click()

        after_clear_state = await cal_objects.completeClearOption.getText()

        assert.equal(after_clear_state, result.replace(result, ''))
    })
})