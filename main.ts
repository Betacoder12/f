input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(0, index)
    }
    for (let index = 0; index <= 2; index++) {
        led.plot(index, 0)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(2, index)
    }
    for (let index = 0; index <= 2; index++) {
        led.plot(index, 4)
    }
    basic.pause(200)
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(0, index)
    }
    for (let index = 0; index <= 1; index++) {
        led.plot(index, 0)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(1, index)
    }
    for (let index = 0; index <= 1; index++) {
        led.plot(index, 4)
    }
    basic.pause(200)
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(0, index)
    }
    for (let index = 0; index <= 3; index++) {
        led.plot(index, 0)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(3, index)
    }
    for (let index = 0; index <= 3; index++) {
        led.plot(index, 4)
    }
})
for (let index = 0; index <= 4; index++) {
    led.plot(0, index)
}
for (let index = 0; index <= 3; index++) {
    led.plot(index, 0)
}
for (let index = 0; index <= 4; index++) {
    led.plot(3, index)
}
for (let index = 0; index <= 3; index++) {
    led.plot(index, 4)
}
basic.forever(function () {
	
})
