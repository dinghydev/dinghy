import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('tf:generate', () => {
  it('runs tf:generate cmd', async () => {
    const {stdout} = await runCommand('tf:generate')
    expect(stdout).to.contain('hello world')
  })

  it('runs tf:generate --name oclif', async () => {
    const {stdout} = await runCommand('tf:generate --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
