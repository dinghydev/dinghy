import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  cluster_identifier: resolvableValue(z.string()),
  endpoint_name: resolvableValue(z.string()),
  subnet_group_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  resource_owner: resolvableValue(z.string().optional()),
  vpc_security_group_ids: resolvableValue(z.string().array().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  address: z.string().optional(),
  id: z.string().optional(),
  port: z.number().optional(),
  vpc_endpoint: z.object({
    network_interface: z.object({
      availability_zone: z.string(),
      network_interface_id: z.string(),
      private_ip_address: z.string(),
      subnet_id: z.string(),
    }).array(),
    vpc_endpoint_id: z.string(),
    vpc_id: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/redshift_endpoint_access

export function AwsRedshiftEndpointAccess(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_endpoint_access'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftEndpointAccesss = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsRedshiftEndpointAccess, idFilter, baseNode)
