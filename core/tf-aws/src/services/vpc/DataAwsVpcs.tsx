import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsVpcsInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsVpcsOutputSchema = z.object({
  id: z.string().optional(),
  ids: z.string().array().optional(),
})

export type DataAwsVpcsInputProps =
  & z.input<typeof DataAwsVpcsInputSchema>
  & NodeProps

export type DataAwsVpcsOutputProps =
  & z.output<typeof DataAwsVpcsOutputSchema>
  & z.output<typeof DataAwsVpcsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/vpcs

export function DataAwsVpcs(props: Partial<DataAwsVpcsInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpcs'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsVpcsInputSchema}
      _outputSchema={DataAwsVpcsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsVpcss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsVpcsOutputProps>(
    DataAwsVpcs,
    idFilter,
    baseNode,
    optional,
  )
