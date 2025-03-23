import { expect } from 'chai'
import { runCli } from '../../runCli.js'

describe('tf:plan', () => {
  it('runs tf:plan cmd', async () => {
    const { stdout } = await runCli('tf:plan')
    expect(stdout).to.contain('hello world')
  })

  it('runs tf:plan --name oclif', async () => {
    const { stdout } = await runCli('tf:plan --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
