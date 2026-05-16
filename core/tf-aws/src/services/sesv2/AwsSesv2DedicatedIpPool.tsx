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

export const AwsSesv2DedicatedIpPoolInputSchema = TfMetaSchema.extend({
  pool_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  scaling_mode: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSesv2DedicatedIpPoolOutputSchema = z.object({
  arn: z.string().optional(),
})

export type AwsSesv2DedicatedIpPoolInputProps =
  & z.input<typeof AwsSesv2DedicatedIpPoolInputSchema>
  & NodeProps

export type AwsSesv2DedicatedIpPoolOutputProps =
  & z.output<typeof AwsSesv2DedicatedIpPoolOutputSchema>
  & z.output<typeof AwsSesv2DedicatedIpPoolInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_dedicated_ip_pool

export function AwsSesv2DedicatedIpPool(
  props: Partial<AwsSesv2DedicatedIpPoolInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sesv2_dedicated_ip_pool'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesv2DedicatedIpPoolInputSchema}
      _outputSchema={AwsSesv2DedicatedIpPoolOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesv2DedicatedIpPool = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSesv2DedicatedIpPoolOutputProps>(
    AwsSesv2DedicatedIpPool,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesv2DedicatedIpPools = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesv2DedicatedIpPoolOutputProps>(
    AwsSesv2DedicatedIpPool,
    idFilter,
    baseNode,
    optional,
  )
