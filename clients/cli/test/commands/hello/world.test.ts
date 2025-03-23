import { expect } from 'chai'
import { runCli } from '../../runCli.js'

describe('hello world', () => {
  it('runs hello world cmd', async () => {
    const { stdout } = await runCli('hello world')
    expect(stdout).to.contain('hello world!')
  })
})
