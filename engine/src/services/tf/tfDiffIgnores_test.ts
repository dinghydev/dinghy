import { assertEquals, assertStringIncludes } from '@std/assert'
import { filterIgnoredResourceChanges } from './tfDiffIgnores.ts'

const createdBlock = (
  type: string,
  name: string,
  attrs: Record<string, string>,
) => [
  `  # ${type}.${name} will be created`,
  `  + resource "${type}" "${name}" {`,
  ...Object.entries(attrs).map(([k, v]) => `      + ${k} = ${v}`),
  `    }`,
]

const updatedBlock = (
  type: string,
  name: string,
  changes: Record<string, string>,
) => [
  `  # ${type}.${name} will be updated in-place`,
  `  ~ resource "${type}" "${name}" {`,
  ...Object.entries(changes).map(([k, v]) => `      ~ ${k} ${v}`),
  `    }`,
]

const destroyedBlock = (
  type: string,
  name: string,
  attrs: Record<string, string>,
) => [
  `  # ${type}.${name} will be destroyed`,
  `  - resource "${type}" "${name}" {`,
  ...Object.entries(attrs).map(([k, v]) => `      - ${k} = ${v}`),
  `    }`,
]

const replacedBlock = (
  type: string,
  name: string,
  changes: Record<string, string>,
) => [
  `  # ${type}.${name} must be replaced`,
  `  -/+ resource "${type}" "${name}" {`,
  ...Object.entries(changes).map(([k, v]) => `      ~ ${k} ${v}`),
  `    }`,
]

const buildPlan = (
  blocks: string[][],
  counts: { add: number; change: number; destroy: number },
) =>
  [
    '',
    'OpenTofu used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:',
    '  + create',
    '',
    'OpenTofu will perform the following actions:',
    '',
    ...blocks.flatMap((b) => [...b, '']),
    `Plan: ${counts.add} to add, ${counts.change} to change, ${counts.destroy} to destroy.`,
  ].join('\n')

const planLine = (planTxt: string) => planTxt.match(/^Plan: .*$/m)![0]

Deno.test('no ignores returns the plan text unchanged', () => {
  const plan = buildPlan(
    [createdBlock('aws_instance', 'server', { ami: '"ami-1"' })],
    { add: 1, change: 0, destroy: 0 },
  )
  assertEquals(filterIgnoredResourceChanges(plan, []), plan)
  assertEquals(filterIgnoredResourceChanges(plan, undefined), plan)
})

Deno.test('type-only pattern ignores every resource of that type, keeps other types', () => {
  const plan = buildPlan(
    [
      createdBlock('aws_security_group', 'web', { name: '"web"' }),
      createdBlock('aws_security_group', 'db', { name: '"db"' }),
      createdBlock('aws_subnet', 'public', { cidr_block: '"10.0.0.0/24"' }),
    ],
    { add: 3, change: 0, destroy: 0 },
  )
  const out = filterIgnoredResourceChanges(plan, ['aws_security_group'])
  assertEquals(out.includes('aws_security_group'), false)
  assertStringIncludes(out, 'aws_subnet.public')
  assertEquals(planLine(out), 'Plan: 1 to add, 0 to change, 0 to destroy.')
})

Deno.test('type.name pattern ignores only the named resource, keeps same-type siblings', () => {
  const plan = buildPlan(
    [
      createdBlock('aws_subnet', 'public_a', { cidr_block: '"10.0.1.0/24"' }),
      createdBlock('aws_subnet', 'public_b', { cidr_block: '"10.0.2.0/24"' }),
    ],
    { add: 2, change: 0, destroy: 0 },
  )
  const out = filterIgnoredResourceChanges(plan, ['aws_subnet.public_a'])
  assertEquals(out.includes('aws_subnet.public_a'), false)
  assertStringIncludes(out, 'aws_subnet.public_b')
  assertEquals(planLine(out), 'Plan: 1 to add, 0 to change, 0 to destroy.')
})

Deno.test('type.* pattern (wildcard name, no attribute) behaves like type-only', () => {
  const plan = buildPlan(
    [
      createdBlock('aws_subnet', 'public_a', { cidr_block: '"10.0.1.0/24"' }),
      createdBlock('aws_subnet', 'public_b', { cidr_block: '"10.0.2.0/24"' }),
    ],
    { add: 2, change: 0, destroy: 0 },
  )
  const out = filterIgnoredResourceChanges(plan, ['aws_subnet.*'])
  assertEquals(out.includes('aws_subnet'), false)
  assertEquals(planLine(out), 'Plan: 0 to add, 0 to change, 0 to destroy.')
})

Deno.test('type.name.attribute pattern drops the resource when that attribute is the sole change', () => {
  const plan = buildPlan(
    [
      updatedBlock('aws_instance', 'server', {
        instance_type: '= "t3.micro" -> "t3.nano"',
      }),
    ],
    { add: 0, change: 1, destroy: 0 },
  )
  const out = filterIgnoredResourceChanges(plan, [
    'aws_instance.server.instance_type',
  ])
  assertEquals(out.includes('aws_instance.server'), false)
  assertEquals(planLine(out), 'Plan: 0 to add, 0 to change, 0 to destroy.')
})

Deno.test('type.name.attribute pattern keeps the resource (including the ignored line) when other attributes also changed', () => {
  const plan = buildPlan(
    [
      updatedBlock('aws_instance', 'server', {
        instance_type: '= "t3.micro" -> "t3.nano"',
        ami: '= "ami-1" -> "ami-2"',
      }),
    ],
    { add: 0, change: 1, destroy: 0 },
  )
  const out = filterIgnoredResourceChanges(plan, [
    'aws_instance.server.instance_type',
  ])
  assertStringIncludes(out, 'aws_instance.server')
  assertStringIncludes(out, 'instance_type')
  assertStringIncludes(out, 'ami')
  assertEquals(planLine(out), 'Plan: 0 to add, 1 to change, 0 to destroy.')
})

Deno.test('type.*.attribute pattern matches the attribute on any resource name of that type', () => {
  const plan = buildPlan(
    [
      updatedBlock('aws_instance', 'server_a', {
        instance_type: '= "t3.micro" -> "t3.nano"',
      }),
      updatedBlock('aws_instance', 'server_b', {
        instance_type: '= "t3.small" -> "t3.medium"',
      }),
    ],
    { add: 0, change: 2, destroy: 0 },
  )
  const out = filterIgnoredResourceChanges(plan, [
    'aws_instance.*.instance_type',
  ])
  assertEquals(out.includes('aws_instance'), false)
  assertEquals(planLine(out), 'Plan: 0 to add, 0 to change, 0 to destroy.')
})

Deno.test('type.*.attribute pattern keeps a resource whose sole change is a different attribute', () => {
  const plan = buildPlan(
    [
      updatedBlock('aws_instance', 'server_a', {
        instance_type: '= "t3.micro" -> "t3.nano"',
      }),
      updatedBlock('aws_instance', 'server_b', {
        ami: '= "ami-1" -> "ami-2"',
      }),
    ],
    { add: 0, change: 2, destroy: 0 },
  )
  const out = filterIgnoredResourceChanges(plan, [
    'aws_instance.*.instance_type',
  ])
  assertEquals(out.includes('aws_instance.server_a'), false)
  assertStringIncludes(out, 'aws_instance.server_b')
  assertEquals(planLine(out), 'Plan: 0 to add, 1 to change, 0 to destroy.')
})

Deno.test('two type.name.attribute entries for the same resource combine: dropped only when both are the sole changes together', () => {
  const plan = buildPlan(
    [
      updatedBlock('aws_instance', 'server', {
        instance_type: '= "t3.micro" -> "t3.nano"',
        ami: '= "ami-1" -> "ami-2"',
      }),
    ],
    { add: 0, change: 1, destroy: 0 },
  )
  const out = filterIgnoredResourceChanges(plan, [
    'aws_instance.server.instance_type',
    'aws_instance.server.ami',
  ])
  assertEquals(out.includes('aws_instance.server'), false)
  assertEquals(planLine(out), 'Plan: 0 to add, 0 to change, 0 to destroy.')
})

Deno.test('two type.name.attribute entries still drop the resource when only one of the two attributes changed', () => {
  const plan = buildPlan(
    [
      updatedBlock('aws_instance', 'server', {
        instance_type: '= "t3.micro" -> "t3.nano"',
      }),
    ],
    { add: 0, change: 1, destroy: 0 },
  )
  const out = filterIgnoredResourceChanges(plan, [
    'aws_instance.server.instance_type',
    'aws_instance.server.ami',
  ])
  assertEquals(out.includes('aws_instance.server'), false)
  assertEquals(planLine(out), 'Plan: 0 to add, 0 to change, 0 to destroy.')
})

Deno.test('two type.name.attribute entries keep the resource when a third, unlisted attribute also changed', () => {
  const plan = buildPlan(
    [
      updatedBlock('aws_instance', 'server', {
        instance_type: '= "t3.micro" -> "t3.nano"',
        ami: '= "ami-1" -> "ami-2"',
        tags: '= { "Name" = "old" } -> { "Name" = "new" }',
      }),
    ],
    { add: 0, change: 1, destroy: 0 },
  )
  const out = filterIgnoredResourceChanges(plan, [
    'aws_instance.server.instance_type',
    'aws_instance.server.ami',
  ])
  assertStringIncludes(out, 'aws_instance.server')
  assertEquals(planLine(out), 'Plan: 0 to add, 1 to change, 0 to destroy.')
})

Deno.test('type.name pattern on a destroyed resource decrements the destroy count', () => {
  const plan = buildPlan(
    [destroyedBlock('aws_instance', 'server', { ami: '"ami-1"' })],
    { add: 0, change: 0, destroy: 1 },
  )
  const out = filterIgnoredResourceChanges(plan, ['aws_instance.server'])
  assertEquals(out.includes('aws_instance'), false)
  assertEquals(planLine(out), 'Plan: 0 to add, 0 to change, 0 to destroy.')
})

Deno.test('type.name pattern on a replaced resource decrements both add and destroy counts', () => {
  const plan = buildPlan(
    [
      replacedBlock('aws_instance', 'server', {
        ami: '= "ami-1" -> "ami-2" # forces replacement',
      }),
    ],
    { add: 1, change: 0, destroy: 1 },
  )
  const out = filterIgnoredResourceChanges(plan, ['aws_instance.server'])
  assertEquals(out.includes('aws_instance'), false)
  assertEquals(planLine(out), 'Plan: 0 to add, 0 to change, 0 to destroy.')
})

Deno.test('multiple ignore patterns combine: type-only for one type, attribute-scoped for another', () => {
  const plan = buildPlan(
    [
      createdBlock('aws_security_group', 'web', { name: '"web"' }),
      updatedBlock('aws_instance', 'server', {
        instance_type: '= "t3.micro" -> "t3.nano"',
      }),
      createdBlock('aws_subnet', 'public', { cidr_block: '"10.0.0.0/24"' }),
    ],
    { add: 2, change: 1, destroy: 0 },
  )
  const out = filterIgnoredResourceChanges(plan, [
    'aws_security_group',
    'aws_instance.server.instance_type',
  ])
  assertEquals(out.includes('aws_security_group'), false)
  assertEquals(out.includes('aws_instance'), false)
  assertStringIncludes(out, 'aws_subnet.public')
  assertEquals(planLine(out), 'Plan: 1 to add, 0 to change, 0 to destroy.')
})

Deno.test('ignoring every resource collapses the plan to zero changes', () => {
  const plan = buildPlan(
    [
      createdBlock('aws_security_group', 'web', { name: '"web"' }),
      createdBlock('aws_subnet', 'public', { cidr_block: '"10.0.0.0/24"' }),
    ],
    { add: 2, change: 0, destroy: 0 },
  )
  const out = filterIgnoredResourceChanges(plan, [
    'aws_security_group',
    'aws_subnet',
  ])
  assertEquals(planLine(out), 'Plan: 0 to add, 0 to change, 0 to destroy.')
})
