import { environment } from '@config/environment'

const sum = (a: number, b: number): number => a + b
const TEN: number = environment.number

export { sum, TEN }
