import { assertEquals } from 'jsr:@std/assert'
import { deepMerge } from './deepMerge.ts'

Deno.test('deepMerge appends two arrays of objects without id', () => {
  const target = [{ a: 1 }]
  const source = [{ b: 2 }]
  const result = deepMerge(target, source)
  assertEquals(result, [{ a: 1 }, { b: 2 }])
})

Deno.test('deepMerge merges array items with the same id', () => {
  const target = [{ id: 'a', x: 1 }, { id: 'b', x: 2 }, { _id: 'c', x: 3 }]
  const source = [{ id: 'a', y: 10 }, { _id: 'c', y: 30 }, { id: 'd', y: 40 }]
  const result = deepMerge(target, source)
  assertEquals(result, [
    { id: 'a', x: 1, y: 10 },
    { id: 'b', x: 2 },
    { _id: 'c', x: 3, y: 30 },
    { id: 'd', y: 40 },
  ])
})
