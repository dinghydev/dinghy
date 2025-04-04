import { expect } from 'chai'
import { runCli } from '../../runCli.ts'

describe('hello', () => {
  it('runs hello', async () => {
    const { stdout } = await runCli('hello friend --from oclif')
    expect(stdout).to.contain('hello friend from oclif!')
  })
})
