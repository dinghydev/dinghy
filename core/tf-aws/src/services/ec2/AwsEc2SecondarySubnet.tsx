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

export const AwsEc2SecondarySubnetInputSchema = TfMetaSchema.extend({
  ipv4_cidr_block: resolvableValue(z.string()),
  secondary_network_id: resolvableValue(z.string()),
  availability_zone: resolvableValue(z.string().optional()),
  availability_zone_id: resolvableValue(z.string().optional()),
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

export const AwsEc2SecondarySubnetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  ipv4_cidr_block_associations: z.object({
    association_id: z.string(),
    cidr_block: z.string(),
    state: z.string(),
  }).array().optional(),
  owner_id: z.string().optional(),
  secondary_network_type: z.string().optional(),
  secondary_subnet_id: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsEc2SecondarySubnetImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsEc2SecondarySubnetInputProps =
  & z.input<typeof AwsEc2SecondarySubnetInputSchema>
  & z.input<typeof AwsEc2SecondarySubnetImportSchema>
  & NodeProps

export type AwsEc2SecondarySubnetOutputProps =
  & z.output<typeof AwsEc2SecondarySubnetOutputSchema>
  & z.output<typeof AwsEc2SecondarySubnetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_secondary_subnet

export function AwsEc2SecondarySubnet(
  props: Partial<AwsEc2SecondarySubnetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_secondary_subnet'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2SecondarySubnetInputSchema}
      _outputSchema={AwsEc2SecondarySubnetOutputSchema}
      _importSchema={AwsEc2SecondarySubnetImportSchema}
      {...props}
    />
  )
}

export const useAwsEc2SecondarySubnet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2SecondarySubnetOutputProps>(
    AwsEc2SecondarySubnet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2SecondarySubnets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2SecondarySubnetOutputProps>(
    AwsEc2SecondarySubnet,
    idFilter,
    baseNode,
    optional,
  )
