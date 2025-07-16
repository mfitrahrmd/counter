export function setupCounter(initialValue: number = 0) {
  let counter = initialValue
  const setCounter = (setter: (v: number) => number) => {
    counter = setter(counter)

    return counter
  }

  setCounter(() => 0)

  return setCounter
}
