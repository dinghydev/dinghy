import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('tf:apply', () => {
  it('runs tf:apply cmd', async () => {
    const {stdout} = await runCommand('tf:apply')
    expect(stdout).to.contain('hello world')
  })

  it('runs tf:apply --name oclif', async () => {
    const {stdout} = await runCommand('tf:apply --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
