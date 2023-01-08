let kontroller = 0
pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P12, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
basic.forever(function () {
    kontroller = pins.analogReadPin(AnalogPin.P0)
    if (kontroller < 200) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        music.playTone(440, music.beat(BeatFraction.Sixteenth))
        basic.pause(20)
    } else if (kontroller > 250 && kontroller <= 500) {
        pins.digitalWritePin(DigitalPin.P12, 1)
        music.playTone(698, music.beat(BeatFraction.Sixteenth))
        basic.pause(20)
    } else if (kontroller > 550) {
        pins.digitalWritePin(DigitalPin.P15, 1)
        music.playTone(175, music.beat(BeatFraction.Sixteenth))
        basic.pause(20)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        music.stopAllSounds()
    }
})
