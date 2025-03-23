import { expect } from 'chai'
import { describe, it } from 'mocha'
import { runCli } from '../../runCli.js'

describe('tf:apply', () => {
  it('runs tf:apply cmd', async () => {
    const { stdout } = await runCli('tf:apply')
    expect(stdout).to.contain('hello world')
  })

  it('runs tf:apply --name oclif', async () => {
    const { stdout } = await runCli('tf:apply --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
