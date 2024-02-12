input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    lcd20x4.writeText(lcd20x4.lcd20x4_eADDR(lcd20x4.eADDR.LCD_20x4), 1, 0, 1, lcd20x4.lcd20x4_text("1"))
})
radio.onReceivedBuffer(function (receivedBuffer19) {
    oBuffer = i2c.fromBuffer(receivedBuffer19)
    lcd20x4.writeText(lcd20x4.lcd20x4_eADDR(lcd20x4.eADDR.LCD_20x4), 0, 12, 15, oBuffer.length(), lcd20x4.eAlign.right)
    lcd20x4.writeText(lcd20x4.lcd20x4_eADDR(lcd20x4.eADDR.LCD_20x4), 1, 0, 19, lcd20x4.lcd20x4_text("" + radio.receivedPacket(RadioPacketProperty.SignalStrength) + " " + bit.formatHex(radio.receivedPacket(RadioPacketProperty.SerialNumber), NumberFormat.Int32BE) + " " + radio.receivedPacket(RadioPacketProperty.Time)))
    ab = oBuffer.chunked(10)
    lcd20x4.setCursor(lcd20x4.lcd20x4_eADDR(lcd20x4.eADDR.LCD_20x4), 2, 0)
    lcd20x4.writeLCD(lcd20x4.lcd20x4_eADDR(lcd20x4.eADDR.LCD_20x4), lcd20x4.lcd20x4_text(ab[0].toHex()))
    if (ab.length >= 2) {
        lcd20x4.setCursor(lcd20x4.lcd20x4_eADDR(lcd20x4.eADDR.LCD_20x4), 3, 0)
        lcd20x4.writeLCD(lcd20x4.lcd20x4_eADDR(lcd20x4.eADDR.LCD_20x4), lcd20x4.lcd20x4_text(ab[1].toHex()))
    }
})
let ab: Buffer[] = []
let oBuffer: i2c.i2cclass = null
lcd20x4.initLCD(lcd20x4.lcd20x4_eADDR(lcd20x4.eADDR.LCD_20x4))
lcd20x4.writeText(lcd20x4.lcd20x4_eADDR(lcd20x4.eADDR.LCD_20x4), 0, 0, 11, lcd20x4.lcd20x4_text("btBufferR-62"))
radio.setGroup(228)
