import { sum, TEN } from '@main/sum/foo'
import { SIX } from '@test/main/constant'
import { environment } from '@config/environment'

describe('Testing Jest with CI', () => {
  it('Should test the imports', () => {
    const sut = sum(3, 3)
    expect(sut).toBe(SIX)
  })
  it('Sould test the environment', () => {
    expect(TEN).toBe(10)
  })
  it('Should test directly the @config import', () => {
    const ALWAYS_TRUE = environment.boolean
    expect(ALWAYS_TRUE).toBe(true)
  })
})
