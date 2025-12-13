import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  prefix: resolvableValue(z.string()),
  latest: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  version: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/synthetics_runtime_version

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

export const useDataAwsSyntheticsRuntimeVersion = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(DataAwsSyntheticsRuntimeVersion, idFilter, baseNode)

export const useDataAwsSyntheticsRuntimeVersions = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    DataAwsSyntheticsRuntimeVersion,
    idFilter,
    baseNode,
  )
