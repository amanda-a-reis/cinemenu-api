import { sum } from '../main/index'

describe('Testing Jest with CI', () => {
  it('Always true test', () => {
    const sut = sum(1, 1)
    expect(sut).toBe(2)
  })
})
