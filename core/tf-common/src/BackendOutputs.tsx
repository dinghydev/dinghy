import {
  deepMerge,
  deepResolve,
  getRenderOptions,
  type NodeProps,
  ResolvableStringSchema,
} from '@dinghy/base-components'
import z from 'zod'
import { useOutputs } from '@dinghy/tf-common'
import Debug from 'debug'
const debug = Debug('tf-common:BackendOutputs')

// Quote a string as an HCL string literal. Embedded `${...}` sequences stay
// intact and interpolate at apply time.
const hclString = (s: unknown): string => JSON.stringify(String(s))

// If `s` is exactly one balanced `${...}` interpolation (no surrounding text),
// return its inner expression; otherwise null. Used to emit interpolation
// output values as raw HCL expressions instead of quoted strings — essential
// for expressions whose body contains double quotes (e.g. `join(", ", x)`),
// which can't survive being embedded inside another JSON string.
const asSingleInterp = (s: string): string | null => {
  if (!s.startsWith('${') || !s.endsWith('}')) return null
  let depth = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '$' && s[i + 1] === '{') {
      depth++
      i++
    } else if (s[i] === '}') {
      depth--
      if (depth === 0 && i !== s.length - 1) return null
    }
  }
  return depth === 0 ? s.slice(2, -1) : null
}

// Serialize a (possibly nested) JS value to an HCL literal for use inside a
// `jsonencode({...})` expression.
const toHcl = (v: any): string => {
  if (v === null || v === undefined) return 'null'
  if (typeof v === 'number' || typeof v === 'boolean') return String(v)
  if (typeof v === 'string') {
    const expr = asSingleInterp(v)
    return expr !== null ? expr : hclString(v)
  }
  if (Array.isArray(v)) return `[${v.map(toHcl).join(', ')}]`
  if (typeof v === 'object') {
    return `{ ${
      Object.entries(v).map(([k, val]) => `${hclString(k)} = ${toHcl(val)}`)
        .join(', ')
    } }`
  }
  return hclString(v)
}

export const BackendOutputsSchema = z.object({
  outputProtocolPrefix: ResolvableStringSchema,
  outputFilePrefix: ResolvableStringSchema.optional(),
  outputFileExt: ResolvableStringSchema.default('.stack.json'),
  component: z.any(),
})

export type InputProps =
  & z.input<typeof BackendOutputsSchema>
  & NodeProps

export function BackendOutputs(
  { component, ...props }: Partial<InputProps>,
) {
  const renderOptions = getRenderOptions()
  const inputProps = deepMerge({}, renderOptions.backendOutputs)
  deepMerge(inputProps, props)
  const backendOutputsConfig = BackendOutputsSchema.loose().parse(inputProps)
  const { allOutputs } = useOutputs()
  const stack = renderOptions.stack as any
  const outputName =
    deepResolve(backendOutputsConfig.outputFileExt).split('.').splice(-2, 1)[0]
  const outputFileName = () =>
    `${
      deepResolve(backendOutputsConfig.outputFilePrefix) || ''
    }${renderOptions.stack.name}${
      deepResolve(backendOutputsConfig.outputFileExt)
    }`
  const _enabled = () => deepResolve(allOutputs.map((o) => o._id)).length > 0
  const populateOutputs = () => {
    stack.outputs ??= {}
    stack.outputs[outputName] = () =>
      `${
        deepResolve(backendOutputsConfig.outputProtocolPrefix)
      }${outputFileName()}`
  }
  // Build the stack.json body as a single `${jsonencode({...})}` Terraform
  // expression rather than a hand-serialized JSON string. The old approach
  // embedded each output value as a nested JSON string, which double-encoded
  // any `${...}` interpolation containing double quotes (e.g. `join(", ", x)`)
  // into invalid `\"`. Emitting one top-level interpolation keeps every value
  // single-escaped: pure interpolations (`${expr}`) become raw HCL expressions,
  // JSON-object values (e.g. Ec2/ECS `JSON.stringify` outputs) recurse into HCL
  // object literals so their structure is preserved, and plain strings stay
  // quoted (embedded refs still interpolate).
  const content = () => {
    // Key by id (consolidatedId ?? id) so multiple output nodes sharing a
    // consolidatedId collapse to one entry — last wins, matching the output
    // block's own dedup and avoiding duplicate keys in the jsonencode object.
    const outputs: Record<string, any> = {}
    deepResolve(allOutputs.map((o) => [o._consolidatedId, o._id, o.value]))
      .forEach((output: any) => {
        let value = output[2]
        if (typeof value === 'string') {
          try {
            value = JSON.parse(value)
          } catch {
            debug(`not a json output value: ${value}`)
          }
        }
        outputs[deepResolve(output[0] || output[1])] = value
      })
    const entries = Object.entries(outputs).map(([id, value]) =>
      `${hclString(id)} = ${toHcl(value)}`
    )
    return `\${jsonencode({\n  ${entries.join(',\n  ')}\n})}`
  }
  const OutputsComponent = component as any
  return (
    <OutputsComponent
      _title={outputFileName}
      filename={outputFileName}
      __key={outputFileName}
      _enabled={_enabled}
      _afterDataBind={populateOutputs}
      content={content}
      {...(backendOutputsConfig as any)}
    />
  )
}
