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

export const DataAwsSyntheticsRuntimeVersionInputSchema = TfMetaSchema.extend({
  prefix: resolvableValue(z.string()),
  latest: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  version: resolvableValue(z.string().optional()),
})

export const DataAwsSyntheticsRuntimeVersionOutputSchema = z.object({
  deprecation_date: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  release_date: z.string().optional(),
  version_name: z.string().optional(),
})

export type DataAwsSyntheticsRuntimeVersionInputProps =
  & z.input<typeof DataAwsSyntheticsRuntimeVersionInputSchema>
  & NodeProps

export type DataAwsSyntheticsRuntimeVersionOutputProps =
  & z.output<typeof DataAwsSyntheticsRuntimeVersionOutputSchema>
  & z.output<typeof DataAwsSyntheticsRuntimeVersionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/synthetics_runtime_version

export function DataAwsSyntheticsRuntimeVersion(
  props: Partial<DataAwsSyntheticsRuntimeVersionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_synthetics_runtime_version'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSyntheticsRuntimeVersionInputSchema}
      _outputSchema={DataAwsSyntheticsRuntimeVersionOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSyntheticsRuntimeVersion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSyntheticsRuntimeVersionOutputProps>(
    DataAwsSyntheticsRuntimeVersion,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSyntheticsRuntimeVersions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSyntheticsRuntimeVersionOutputProps>(
    DataAwsSyntheticsRuntimeVersion,
    idFilter,
    baseNode,
    optional,
  )
