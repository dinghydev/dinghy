import { assertEquals, assertThrows } from 'jsr:@std/assert'
import { expandEnvPlaceholdersDeep } from './stringUtils.ts'

Deno.test('expandEnvPlaceholdersDeep expands nested strings', () => {
  const env = { HOST: 'example.com', PORT: '8080' }
  const result = expandEnvPlaceholdersDeep({
    url: 'https://${HOST}',
    server: { port: '${PORT}', tags: ['${HOST}', 'static'] },
  }, env)
  assertEquals(result, {
    url: 'https://example.com',
    server: { port: '8080', tags: ['example.com', 'static'] },
  })
})

Deno.test('expandEnvPlaceholdersDeep leaves non-strings untouched', () => {
  const result = expandEnvPlaceholdersDeep({
    count: 3,
    enabled: true,
    nothing: null,
  }, {})
  assertEquals(result, { count: 3, enabled: true, nothing: null })
})

Deno.test('expandEnvPlaceholdersDeep applies -default fallback', () => {
  const result = expandEnvPlaceholdersDeep({ bucket: '${BUCKET-fallback}' }, {})
  assertEquals(result, { bucket: 'fallback' })
})

Deno.test('expandEnvPlaceholdersDeep throws on unset placeholder', () => {
  assertThrows(
    () => expandEnvPlaceholdersDeep({ bucket: '${MISSING}' }, {}),
    Error,
    "env var 'MISSING' not set",
  )
})

Deno.test('expandEnvPlaceholdersDeep does not mutate input', () => {
  const input = { url: 'https://${HOST}' }
  expandEnvPlaceholdersDeep(input, { HOST: 'example.com' })
  assertEquals(input, { url: 'https://${HOST}' })
})
