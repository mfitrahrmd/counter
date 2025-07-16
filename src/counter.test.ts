import { setupCounter } from './counter'

const setCounter = setupCounter()

test('add counter 1 returns 1', () => {
  expect(setCounter((v) => v + 1)).toBe(1)
})
