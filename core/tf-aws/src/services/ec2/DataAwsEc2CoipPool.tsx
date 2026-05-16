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

export const DataAwsEc2CoipPoolInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  local_gateway_route_table_id: resolvableValue(z.string().optional()),
  pool_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsEc2CoipPoolOutputSchema = z.object({
  arn: z.string().optional(),
  pool_cidrs: z.set(z.string()).optional(),
})

export type DataAwsEc2CoipPoolInputProps =
  & z.input<typeof DataAwsEc2CoipPoolInputSchema>
  & NodeProps

export type DataAwsEc2CoipPoolOutputProps =
  & z.output<typeof DataAwsEc2CoipPoolOutputSchema>
  & z.output<typeof DataAwsEc2CoipPoolInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_coip_pool

export function DataAwsEc2CoipPool(
  props: Partial<DataAwsEc2CoipPoolInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_coip_pool'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2CoipPoolInputSchema}
      _outputSchema={DataAwsEc2CoipPoolOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2CoipPool = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEc2CoipPoolOutputProps>(
    DataAwsEc2CoipPool,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2CoipPools = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2CoipPoolOutputProps>(
    DataAwsEc2CoipPool,
    idFilter,
    baseNode,
    optional,
  )
