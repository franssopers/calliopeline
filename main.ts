input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showIcon(IconNames.Yes)
    l = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(l)
    c = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(c)
    r = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(r)
})
let r = 0
let c = 0
let l = 0
l = 0
c = 0
r = 0
led.setBrightness(19)
