let y = 0
let intensité = 0
let x = 0
basic.forever(function () {
    y = 0
    intensité = 255
    x = randint(0, 4)
    basic.pause(200)
    for (let index = 0; index < 7; index++) {
        led.plot(x, y)
        basic.pause(200)
        y += 1
        intensité += -40
        led.setBrightness(intensité)
        led.unplot(x, y - 3)
    }
})
