import { Coverage } from './coverage'
import { metrics } from './config'

describe('Verify if coverage is enough', () => {
  it('Verify coverage', () => {
    const sut = new Coverage(metrics).generateCiParam()
    expect(sut).toBe(true)
  })
})
