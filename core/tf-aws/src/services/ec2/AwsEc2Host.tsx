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

export const AwsEc2HostInputSchema = TfMetaSchema.extend({
  availability_zone: resolvableValue(z.string()),
  asset_id: resolvableValue(z.string().optional()),
  auto_placement: resolvableValue(z.string().optional()),
  host_recovery: resolvableValue(z.string().optional()),
  instance_family: resolvableValue(z.string().optional()),
  instance_type: resolvableValue(z.string().optional()),
  outpost_arn: resolvableValue(z.string().optional()),
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

export const AwsEc2HostOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsEc2HostInputProps =
  & z.input<typeof AwsEc2HostInputSchema>
  & NodeProps

export type AwsEc2HostOutputProps =
  & z.output<typeof AwsEc2HostOutputSchema>
  & z.output<typeof AwsEc2HostInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_host

export function AwsEc2Host(props: Partial<AwsEc2HostInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_host'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2HostInputSchema}
      _outputSchema={AwsEc2HostOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2Host = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2HostOutputProps>(AwsEc2Host, idFilter, baseNode, optional)

export const useAwsEc2Hosts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2HostOutputProps>(AwsEc2Host, idFilter, baseNode, optional)
