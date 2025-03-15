import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('tf:gip', () => {
  it('runs tf:gip cmd', async () => {
    const {stdout} = await runCommand('tf:gip')
    expect(stdout).to.contain('hello world')
  })

  it('runs tf:gip --name oclif', async () => {
    const {stdout} = await runCommand('tf:gip --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
