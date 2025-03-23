import { expect } from 'chai'
import { runCli } from '../../runCli.js'
import { allFixtures } from '../../fixtures.js'

describe('tf generate', () => {
  it('runs tf generate tf json for all fixtures', async () => {
    for (const appHome of allFixtures()) {
      const { result } = await runCli(
        `tf generate --app-render-stack-options --app-home ${appHome}`,
      )
      expect(result, 'result from render').to.not.be.undefined
      // todo: check no changes in the tf files
    }
  })
})
