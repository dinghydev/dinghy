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

export const DataAwsEipInputSchema = TfMetaSchema.extend({
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
})

export const DataAwsEipOutputSchema = z.object({
  arn: z.string().optional(),
  association_id: z.string().optional(),
  carrier_ip: z.string().optional(),
  customer_owned_ip: z.string().optional(),
  customer_owned_ipv4_pool: z.string().optional(),
  domain: z.string().optional(),
  id: z.string().optional(),
  instance_id: z.string().optional(),
  ipam_pool_id: z.string().optional(),
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

export type DataAwsEipInputProps =
  & z.input<typeof DataAwsEipInputSchema>
  & NodeProps

export type DataAwsEipOutputProps =
  & z.output<typeof DataAwsEipOutputSchema>
  & z.output<typeof DataAwsEipInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/eip

export function DataAwsEip(props: Partial<DataAwsEipInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsEip
      _type='aws_eip'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEipInputSchema}
      _outputSchema={DataAwsEipOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEip = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEipOutputProps>(DataAwsEip, idFilter, baseNode, optional)

export const useDataAwsEips = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEipOutputProps>(DataAwsEip, idFilter, baseNode, optional)
