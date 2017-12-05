const lineSpacing = 2      // px between button text rows

const drawInstrumentKeys = (state) => {

  const context = state.context.graphics
  const stateKey = state.key

  for (const keyIndex of stateKey.indexOrderArray) {
    const key = stateKey.array[keyIndex]
    if (key.physicsSwitchedOn) {

      const canvasCoords = key.coords.canvas
      const x = canvasCoords.x
      const y = canvasCoords.y
      const r = canvasCoords.r

      context.fillStyle = key.fillStyle(state, key)
      context.strokeStyle = key.strokeStyle(state, key)
      context.lineWidth = key.lineWidth(state, key)
      context.beginPath()
      context.arc(x, y, r, 0, 2*Math.PI);
      context.stroke();
      context.fill()
      // Draw button labels
      // Centering in x direction is automatic
      context.textAlign = "center"
      context.textBaseline = "middle"
      // Centering in y direction is manual, see yText below
      context.font = key.font(state, key)
      context.fillStyle = key.textColour(state, key)
      const buttonTextArray = key.labelArray(state, key)
      const fontHeight = key.fontHeight(state, key)
      const lineHeight = fontHeight + lineSpacing
      const maxI = buttonTextArray.length - 1
      for (const i in buttonTextArray) {
        const theText = buttonTextArray[i]
        // Button text would be vertically centered for a SINGLE line
        // Here we centre it for MULTIPLE lines
        const yText = y + lineHeight * (i - 0.5 * maxI)
        context.fillText(theText, x, yText)
      }
    }
  }
}

export default drawInstrumentKeys
