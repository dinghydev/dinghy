import { runCli } from '../../runCli'
import {expect} from 'chai'

describe('tf:gip', () => {
  it('runs tf:gip cmd', async () => {
    const {stdout} = await runCli('tf:gip')
    expect(stdout).to.contain('hello world')
  })

  it('runs tf:gip --name oclif', async () => {
    const {stdout} = await runCli('tf:gip --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
