import { runCli } from '../../runCli'
import {expect} from 'chai'

describe('tf:generate', () => {
  it('runs tf:generate cmd', async () => {
    const {stdout} = await runCli('tf:generate')
    expect(stdout).to.contain('hello world')
  })

  it('runs tf:generate --name oclif', async () => {
    const {stdout} = await runCli('tf:generate --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
