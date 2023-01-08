let kontroller = 0
pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P12, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
basic.forever(function () {
    kontroller = pins.analogReadPin(AnalogPin.P0)
    if (kontroller < 200) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (kontroller >= 220 && kontroller <= 500) {
        pins.digitalWritePin(DigitalPin.P12, 1)
    } else if (kontroller > 550) {
        pins.digitalWritePin(DigitalPin.P15, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }
})
