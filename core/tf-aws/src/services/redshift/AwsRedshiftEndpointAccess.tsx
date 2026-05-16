import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsRedshiftEndpointAccessInputSchema = TfMetaSchema.extend({
  cluster_identifier: resolvableValue(z.string()),
  endpoint_name: resolvableValue(z.string()),
  subnet_group_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  resource_owner: resolvableValue(z.string().optional()),
  vpc_security_group_ids: resolvableValue(z.string().array().optional()),
})

export const AwsRedshiftEndpointAccessOutputSchema = z.object({
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

export type AwsRedshiftEndpointAccessInputProps =
  & z.input<typeof AwsRedshiftEndpointAccessInputSchema>
  & NodeProps

export type AwsRedshiftEndpointAccessOutputProps =
  & z.output<typeof AwsRedshiftEndpointAccessOutputSchema>
  & z.output<typeof AwsRedshiftEndpointAccessInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_endpoint_access

export function AwsRedshiftEndpointAccess(
  props: Partial<AwsRedshiftEndpointAccessInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_endpoint_access'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftEndpointAccessInputSchema}
      _outputSchema={AwsRedshiftEndpointAccessOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftEndpointAccesss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftEndpointAccessOutputProps>(
    AwsRedshiftEndpointAccess,
    idFilter,
    baseNode,
    optional,
  )
