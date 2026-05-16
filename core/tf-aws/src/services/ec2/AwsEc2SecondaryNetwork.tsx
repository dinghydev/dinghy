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

export const AwsEc2SecondaryNetworkInputSchema = TfMetaSchema.extend({
  ipv4_cidr_block: resolvableValue(z.string()),
  network_type: resolvableValue(z.string()),
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

export const AwsEc2SecondaryNetworkOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  ipv4_cidr_block_associations: z.object({
    association_id: z.string(),
    cidr_block: z.string(),
    state: z.string(),
  }).array().optional(),
  owner_id: z.string().optional(),
  secondary_network_id: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsEc2SecondaryNetworkImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsEc2SecondaryNetworkInputProps =
  & z.input<typeof AwsEc2SecondaryNetworkInputSchema>
  & z.input<typeof AwsEc2SecondaryNetworkImportSchema>
  & NodeProps

export type AwsEc2SecondaryNetworkOutputProps =
  & z.output<typeof AwsEc2SecondaryNetworkOutputSchema>
  & z.output<typeof AwsEc2SecondaryNetworkInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_secondary_network

export function AwsEc2SecondaryNetwork(
  props: Partial<AwsEc2SecondaryNetworkInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_secondary_network'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2SecondaryNetworkInputSchema}
      _outputSchema={AwsEc2SecondaryNetworkOutputSchema}
      _importSchema={AwsEc2SecondaryNetworkImportSchema}
      {...props}
    />
  )
}

export const useAwsEc2SecondaryNetwork = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2SecondaryNetworkOutputProps>(
    AwsEc2SecondaryNetwork,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2SecondaryNetworks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2SecondaryNetworkOutputProps>(
    AwsEc2SecondaryNetwork,
    idFilter,
    baseNode,
    optional,
  )
