class calculator_objects{

    calNum(index){

        return $(`//android.widget.ImageButton[contains(@content-desc,'${index}')]`)
    }

    generalTextField(text){

        return $(`//android.widget.TextView[contains(@text, '${text}')]`)
    }

    get calculatorNumbers(){

        return $("//android.widget.ImageButton[contains(@content-desc,'5')]")
    }

    get divideBtn(){

        return $("//android.widget.ImageButton[@content-desc='divide']")
    }

    get multiplyBtn(){

        return $("//android.widget.ImageButton[@content-desc='multiply']")
    }

    get plusBtn(){

        return $("//android.widget.ImageButton[@content-desc='plus']")
    }

    get minusBtn(){

        return $("//android.widget.ImageButton[@content-desc='minus']")
    }

    get equalBtn(){

        return $("//android.widget.ImageButton[@content-desc='equals']")
    }

    get getResult(){

        return $("//android.widget.TextView[@resource-id='com.google.android.calculator:id/result_final']")
    }

    get clearField(){

        return $("//android.widget.ImageButton[@content-desc='clear']")
    }

    get beforeClearFieldState(){

        return $("//android.widget.EditText[@resource-id='com.google.android.calculator:id/formula']")
    }

    get deleteBtn(){

        return $("//android.widget.ImageButton[@content-desc='delete']")
    }

    get completeClearOption(){

        return $("//android.widget.EditText[@content-desc='No formula']")
    }

    get dragHandleViewer(){

        return $("//android.widget.ImageView[@resource-id='com.google.android.calculator:id/drag_handle_view']")
    }

    get moreOptionBtn(){

        return $("(//android.widget.ImageView[@content-desc='More options'])")
    }

    get historyBtn(){

        return $("//android.widget.TextView[contains(@text,'History')]")
    }

    get moreDetailBtn(){

        return $("(//android.widget.ImageView[@content-desc='More options'])[1]")
    }
}

module.exports = new calculator_objects();