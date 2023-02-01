import fs from 'fs'
import path from 'path'

interface Metrics {
  statement: number
  branch: number
  function: number
  line: number
}

type Report = [isValidStatement: boolean, isValidBranch: boolean, isValidFunction: boolean, isValidLine: boolean]

class Coverage {
  coverageString: string

  constructor (private readonly metrics: Metrics) {
    this.coverageString = this.readCoverageFile()
  }

  private readCoverageFile (): string {
    return fs.readFileSync(path.resolve(__dirname, 'coverage.txt'), 'utf-8')
  }

  private formatCoverage (): number[] {
    const converageArray = this.coverageString.replace(/[A-z]/g, '').replace(/=|\n|%/g, '').split(':')
    return converageArray.map(el => {
      return el.trim().split(' (')[0]
    }).filter(el => el !== '').map(el => Number(el))
  }

  private verifyCoverage (): Report {
    const coverage = this.formatCoverage()
    const isValidStatement = coverage[0] >= this.metrics.statement
    const isValidBranch = coverage[1] >= this.metrics.branch
    const isValidFunction = coverage[2] >= this.metrics.function
    const isValidLine = coverage[3] >= this.metrics.line

    if (this.coverageString === '') return Array.from({ length: 5 }, () => true) as Report

    return [isValidStatement, isValidBranch, isValidFunction, isValidLine]
  }

  private generateReport (): void {
    const coverage = this.formatCoverage()
    const report = this.verifyCoverage()
    console.log(`
      Statements: ${coverage[0]}% ${report[0] ? '- adequate' : '- insufficient'} - min is ${this.metrics.statement}%\n
      Branches: ${coverage[1]}% ${report[1] ? '- adequate' : '- insufficient'} - min is ${this.metrics.branch}%\n
      Functions: ${coverage[2]}% ${report[2] ? '- adequate' : '- insufficient'} - min is ${this.metrics.function}%\n
      Lines: ${coverage[3]}% ${report[3] ? '- adequate' : '- insufficient'} - min is ${this.metrics.line}%\n
      ** For more details you can use npm run coverage:dev **
    `)
  }

  generateCiParam (): boolean {
    const report = this.verifyCoverage()
    if (this.coverageString !== '') this.generateReport()
    return report.every((element: boolean) => element)
  }
}

export { Coverage, Metrics }
