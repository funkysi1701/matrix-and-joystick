function displayArrow () {
    max7219_matrix.displayText(
    "<",
    0,
    true
    )
}
let y = 0
let x = 0
max7219_matrix.setup(
1,
DigitalPin.P16,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
max7219_matrix.brightnessAll(1)
max7219_matrix.for_4_in_1_modules(
rotation_direction.none,
false
)
basic.forever(function () {
    x = 0
    y = 0
    serial.writeNumber(x)
    serial.writeLine("")
    serial.writeNumber(y)
    serial.writeLine("")
    if (y < 200) {
        displayArrow()
        max7219_matrix.for_4_in_1_modules(
        rotation_direction.clockwise,
        false
        )
    } else if (y > 800) {
        displayArrow()
        max7219_matrix.for_4_in_1_modules(
        rotation_direction.counterclockwise,
        false
        )
    } else {
    	
    }
    if (x < 200) {
        displayArrow()
        max7219_matrix.for_4_in_1_modules(
        rotation_direction.one_eighty_degree,
        false
        )
    } else if (x > 800) {
        displayArrow()
        max7219_matrix.for_4_in_1_modules(
        rotation_direction.none,
        false
        )
    } else {
    	
    }
})
