import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('tf:init', () => {
  it('runs tf:init cmd', async () => {
    const {stdout} = await runCommand('tf:init')
    expect(stdout).to.contain('hello world')
  })

  it('runs tf:init --name oclif', async () => {
    const {stdout} = await runCommand('tf:init --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
