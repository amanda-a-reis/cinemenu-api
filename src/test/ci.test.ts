import { sum } from '@main/sum/foo'
import { SIX } from '@test/main/constant'

describe('Testing Jest with CI', () => {
  it('Should teste the imports', () => {
    const sut = sum(3, 3)
    expect(sut).toBe(SIX)
  })
})
