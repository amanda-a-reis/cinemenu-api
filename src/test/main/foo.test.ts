import { printHelloWorld } from '@main/foo'

describe('hello world', () => {
  it('should print', () => {
    const hello = printHelloWorld()
    expect(hello).toBe('hello')
  })
})
