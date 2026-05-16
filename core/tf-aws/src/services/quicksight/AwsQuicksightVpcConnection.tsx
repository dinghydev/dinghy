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

export const AwsQuicksightVpcConnectionInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  security_group_ids: resolvableValue(z.string().array()),
  subnet_ids: resolvableValue(z.string().array()),
  vpc_connection_id: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  dns_resolvers: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsQuicksightVpcConnectionOutputSchema = z.object({
  arn: z.string().optional(),
  availability_status: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsQuicksightVpcConnectionInputProps =
  & z.input<typeof AwsQuicksightVpcConnectionInputSchema>
  & NodeProps

export type AwsQuicksightVpcConnectionOutputProps =
  & z.output<typeof AwsQuicksightVpcConnectionOutputSchema>
  & z.output<typeof AwsQuicksightVpcConnectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/quicksight_vpc_connection

export function AwsQuicksightVpcConnection(
  props: Partial<AwsQuicksightVpcConnectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_vpc_connection'
      _category='resource'
      _title={_title}
      _inputSchema={AwsQuicksightVpcConnectionInputSchema}
      _outputSchema={AwsQuicksightVpcConnectionOutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightVpcConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsQuicksightVpcConnectionOutputProps>(
    AwsQuicksightVpcConnection,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsQuicksightVpcConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsQuicksightVpcConnectionOutputProps>(
    AwsQuicksightVpcConnection,
    idFilter,
    baseNode,
    optional,
  )
