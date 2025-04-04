import { expect } from 'chai'
import { runCli } from '../../runCli.ts'
import { allFixtures } from '../../fixtures.ts'

describe('tf generate', () => {
  it('runs tf generate tf json for all fixtures', async () => {
    for (const appHome of allFixtures()) {
      const { result } = await runCli(
        `tf generate --app-render-stack-options --app-home ${appHome} --app-file App.js --app-output-dir output`,
      )
      expect(result, 'result from render').to.not.be.undefined
      // todo: check no changes in the tf files
    }
  })
})
