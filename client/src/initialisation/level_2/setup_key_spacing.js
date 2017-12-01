const setupKeySpacing = (state) => {

  const min = 1
  const step = 1
  const max = 11
  const initial = 3

  state.keySpacing = {}
  const source = state.keySpacing

  source.min = min
  source.step = step
  source.max = max
  source.initial = initial
  source.current = initial
  source.updated = true

  console.log(
    "Key spacing initialised. Min", min,
    "initially", initial,
    "step", step,
    "max", max
  )
}

export default setupKeySpacing