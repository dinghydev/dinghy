import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/synthetics_runtime_version

export const InputSchema = z.object({
  prefix: resolvableValue(z.string()),
  latest: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  version: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  deprecation_date: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  release_date: z.string().optional(),
  version_name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsSyntheticsRuntimeVersion(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_synthetics_runtime_version'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSyntheticsRuntimeVersion = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsSyntheticsRuntimeVersion, node, id)

export const useDataAwsSyntheticsRuntimeVersions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsSyntheticsRuntimeVersion, node, id)
