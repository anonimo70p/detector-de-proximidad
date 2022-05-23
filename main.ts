radio.setGroup(13)
basic.forever(function () {
    radio.sendNumber(13)
    radio.setTransmitPower(1)
})
