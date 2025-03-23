import { expect } from 'chai'
import { runCli } from '../../runCli.js'
import { allFixtures } from '../../fixtures.js'

describe('json generate', () => {
  it('runs json generate model for all fixtures', async () => {
    for (const appHome of allFixtures()) {
      const { result } = await runCli(
        `json generate --app-home ${appHome} --app-file App.js --app-output-dir output`,
      )
      expect(result, 'result from render').to.not.be.undefined
    }
  })
})
