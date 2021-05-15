Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 60)
basic.forever(function () {
    if (Kitronik_Move_Motor.measure() >= 5) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 60)
    } else {
        Kitronik_Move_Motor.stop()
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        Kitronik_Move_Motor.beepHorn()
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 30)
    }
})
