import Slider from '../../models/slider'

const setupBaseFreq = (state) => {

  const slider = new Slider({
    id: "baseFreq",
    label: "Base",
    unit: "Hz",
    initial: state.param.baseFrequencyHz,
    min: Math.round(state.param.minMinHz),
    max: Math.round(state.param.maxMaxHz),
    logScale: true,
    points: 1 + 240 * Math.log2(state.param.maxMaxHz / state.param.minMinHz)
  })

  return slider
}

export default setupBaseFreq