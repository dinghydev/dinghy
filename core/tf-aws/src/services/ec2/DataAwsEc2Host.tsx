import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEc2Host } from './AwsEc2Host.tsx'

export const InputSchema = z.object({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  host_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  asset_id: z.string().optional(),
  auto_placement: z.string().optional(),
  availability_zone: z.string().optional(),
  cores: z.number().optional(),
  host_recovery: z.string().optional(),
  id: z.string().optional(),
  instance_family: z.string().optional(),
  instance_type: z.string().optional(),
  outpost_arn: z.string().optional(),
  owner_id: z.string().optional(),
  sockets: z.number().optional(),
  total_vcpus: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/ec2_host

export function DataAwsEc2Host(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsEc2Host
      _type='aws_ec2_host'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEc2Host = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsEc2Host, idFilter, baseNode, optional)

export const useDataAwsEc2Hosts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsEc2Host, idFilter, baseNode, optional)
