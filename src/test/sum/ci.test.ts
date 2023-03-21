import { sum, TEN } from '@main/sum/foo'
import { SIX } from '@test/sum/constant'
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
    const ELEVEN = sum(environment.number, 1)
    expect(ELEVEN).toBe(11)
  })
})
