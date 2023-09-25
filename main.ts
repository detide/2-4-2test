basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    basic.clearScreen()
})
