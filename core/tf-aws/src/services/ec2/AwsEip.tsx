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

export const AwsEipInputSchema = TfMetaSchema.extend({
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
})

export const AwsEipOutputSchema = z.object({
  allocation_id: z.string().optional(),
  arn: z.string().optional(),
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

export const AwsEipImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsEipInputProps =
  & z.input<typeof AwsEipInputSchema>
  & z.input<typeof AwsEipImportSchema>
  & NodeProps

export type AwsEipOutputProps =
  & z.output<typeof AwsEipOutputSchema>
  & z.output<typeof AwsEipInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/eip

export function AwsEip(props: Partial<AwsEipInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eip'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEipInputSchema}
      _outputSchema={AwsEipOutputSchema}
      _importSchema={AwsEipImportSchema}
      {...props}
    />
  )
}

export const useAwsEip = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<AwsEipOutputProps>(AwsEip, idFilter, baseNode, optional)

export const useAwsEips = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<AwsEipOutputProps>(AwsEip, idFilter, baseNode, optional)
