import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('tf:plan', () => {
  it('runs tf:plan cmd', async () => {
    const {stdout} = await runCommand('tf:plan')
    expect(stdout).to.contain('hello world')
  })

  it('runs tf:plan --name oclif', async () => {
    const {stdout} = await runCommand('tf:plan --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
