import { runCli } from '../../runCli'
import {expect} from 'chai'

describe('tf:init', () => {
  it('runs tf:init cmd', async () => {
    const {stdout} = await runCli('tf:init')
    expect(stdout).to.contain('hello world')
  })

  it('runs tf:init --name oclif', async () => {
    const {stdout} = await runCli('tf:init --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
