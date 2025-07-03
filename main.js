input.onButtonPressed(Button.A, function () {
    basic.showString("X:")
    basic.showNumber(input.acceleration(Dimension.X))
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Z:")
    basic.showNumber(input.acceleration(Dimension.Z))
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Y:")
    basic.showNumber(input.acceleration(Dimension.Y))
    basic.pause(1000)
    basic.clearScreen()
})
basic.forever(function () {
    led.toggle(2, 2)
    basic.pause(500)
})
