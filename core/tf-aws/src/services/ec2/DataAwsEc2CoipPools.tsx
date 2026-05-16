import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEc2CoipPoolsInputSchema = TfMetaSchema.extend({
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

export const DataAwsEc2CoipPoolsOutputSchema = z.object({
  id: z.string().optional(),
  pool_ids: z.string().array().optional(),
})

export type DataAwsEc2CoipPoolsInputProps =
  & z.input<typeof DataAwsEc2CoipPoolsInputSchema>
  & NodeProps

export type DataAwsEc2CoipPoolsOutputProps =
  & z.output<typeof DataAwsEc2CoipPoolsOutputSchema>
  & z.output<typeof DataAwsEc2CoipPoolsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_coip_pools

export function DataAwsEc2CoipPools(
  props: Partial<DataAwsEc2CoipPoolsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_coip_pools'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2CoipPoolsInputSchema}
      _outputSchema={DataAwsEc2CoipPoolsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2CoipPoolss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2CoipPoolsOutputProps>(
    DataAwsEc2CoipPools,
    idFilter,
    baseNode,
    optional,
  )
