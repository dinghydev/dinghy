import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEip } from './AwsEip.tsx'

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  ipam_pool_id: resolvableValue(z.string()),
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  public_ip: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  association_id: z.string().optional(),
  carrier_ip: z.string().optional(),
  customer_owned_ip: z.string().optional(),
  customer_owned_ipv4_pool: z.string().optional(),
  domain: z.string().optional(),
  id: z.string().optional(),
  instance_id: z.string().optional(),
  network_interface_id: z.string().optional(),
  network_interface_owner_id: z.string().optional(),
  private_dns: z.string().optional(),
  private_ip: z.string().optional(),
  ptr_record: z.string().optional(),
  public_dns: z.string().optional(),
  public_ip: z.string().optional(),
  public_ipv4_pool: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/eip

export function DataAwsEip(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsEip
      _type='aws_eip'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEip = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsEip, idFilter, baseNode, optional)

export const useDataAwsEips = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsEip, idFilter, baseNode, optional)
