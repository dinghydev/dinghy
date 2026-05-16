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

export const AwsMskVpcConnectionInputSchema = TfMetaSchema.extend({
  authentication: resolvableValue(z.string()),
  client_subnets: resolvableValue(z.string().array()),
  security_groups: resolvableValue(z.string().array()),
  target_cluster_arn: resolvableValue(z.string()),
  vpc_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsMskVpcConnectionOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsMskVpcConnectionInputProps =
  & z.input<typeof AwsMskVpcConnectionInputSchema>
  & NodeProps

export type AwsMskVpcConnectionOutputProps =
  & z.output<typeof AwsMskVpcConnectionOutputSchema>
  & z.output<typeof AwsMskVpcConnectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_vpc_connection

export function AwsMskVpcConnection(
  props: Partial<AwsMskVpcConnectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_msk_vpc_connection'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMskVpcConnectionInputSchema}
      _outputSchema={AwsMskVpcConnectionOutputSchema}
      {...props}
    />
  )
}

export const useAwsMskVpcConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMskVpcConnectionOutputProps>(
    AwsMskVpcConnection,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMskVpcConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMskVpcConnectionOutputProps>(
    AwsMskVpcConnection,
    idFilter,
    baseNode,
    optional,
  )
