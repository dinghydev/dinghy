import { assertEquals } from 'jsr:@std/assert'
import { resolveFullPath } from './home.ts'
import { hostAppHome, hostUserHome } from './home.ts'

Deno.test('resolveFullPath', async (t) => {
  await t.step('expands ~ to hostUserHome', () => {
    assertEquals(
      resolveFullPath('~/.ssh/id_rsa'),
      `${hostUserHome}/.ssh/id_rsa`,
    )
  })

  await t.step('prepends hostAppHome for relative paths', () => {
    assertEquals(resolveFullPath('foo/bar'), `${hostAppHome}/foo/bar`)
  })

  await t.step('keeps absolute paths as-is', () => {
    assertEquals(resolveFullPath('/absolute/path'), '/absolute/path')
  })

  await t.step('normalises .. segments', () => {
    assertEquals(resolveFullPath('/foo/../bar.sh'), '/bar.sh')
  })

  await t.step('normalises . segments', () => {
    assertEquals(resolveFullPath('/foo/./bar.sh'), '/foo/bar.sh')
  })

  await t.step('normalises ~ path with .. segments', () => {
    assertEquals(resolveFullPath('~/a/../b'), `${hostUserHome}/b`)
  })

  await t.step('normalises relative path with . segments', () => {
    assertEquals(resolveFullPath('./foo/bar'), `${hostAppHome}/foo/bar`)
  })
})
