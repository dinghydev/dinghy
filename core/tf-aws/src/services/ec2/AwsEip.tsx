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

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  address: resolvableValue(z.string().optional()),
  associate_with_private_ip: resolvableValue(z.string().optional()),
  customer_owned_ipv4_pool: resolvableValue(z.string().optional()),
  domain: resolvableValue(z.string().optional()),
  instance: resolvableValue(z.string().optional()),
  ipam_pool_id: resolvableValue(z.string().optional()),
  network_border_group: resolvableValue(z.string().optional()),
  network_interface: resolvableValue(z.string().optional()),
  public_ipv4_pool: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
      read: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  allocation_id: z.string().optional(),
  association_id: z.string().optional(),
  carrier_ip: z.string().optional(),
  customer_owned_ip: z.string().optional(),
  id: z.string().optional(),
  private_dns: z.string().optional(),
  private_ip: z.string().optional(),
  ptr_record: z.string().optional(),
  public_dns: z.string().optional(),
  public_ip: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eip

export function AwsEip(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eip'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEip = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsEip, idFilter, baseNode, optional)

export const useAwsEips = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsEip, idFilter, baseNode, optional)
