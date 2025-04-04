import { expect } from 'chai'
import { runCli } from '../../runCli.ts'
import { allFixtures } from '../../fixtures.ts'

describe('diagram generate', () => {
  it('runs diagram generate drawio xml for all fixtures', async () => {
    for (const appHome of allFixtures()) {
      const { result } = await runCli(
        `diagram generate --app-render-stack-options --app-home ${appHome} --app-file App.js --app-output-dir output`,
      )
      expect(result, 'result from render').to.not.be.undefined
      // todo: check no changes in the diagram
    }
  })
})
