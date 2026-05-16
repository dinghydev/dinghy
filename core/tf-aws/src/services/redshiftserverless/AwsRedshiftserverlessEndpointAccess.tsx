import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsRedshiftserverlessEndpointAccessInputSchema = TfMetaSchema
  .extend({
    endpoint_name: resolvableValue(z.string()),
    subnet_ids: resolvableValue(z.string().array()),
    workgroup_name: resolvableValue(z.string()),
    owner_account: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    vpc_security_group_ids: resolvableValue(z.string().array().optional()),
  })

export const AwsRedshiftserverlessEndpointAccessOutputSchema = z.object({
  address: z.string().optional(),
  arn: z.string().optional(),
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

export type AwsRedshiftserverlessEndpointAccessInputProps =
  & z.input<typeof AwsRedshiftserverlessEndpointAccessInputSchema>
  & NodeProps

export type AwsRedshiftserverlessEndpointAccessOutputProps =
  & z.output<typeof AwsRedshiftserverlessEndpointAccessOutputSchema>
  & z.output<typeof AwsRedshiftserverlessEndpointAccessInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftserverless_endpoint_access

export function AwsRedshiftserverlessEndpointAccess(
  props: Partial<AwsRedshiftserverlessEndpointAccessInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshiftserverless_endpoint_access'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftserverlessEndpointAccessInputSchema}
      _outputSchema={AwsRedshiftserverlessEndpointAccessOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftserverlessEndpointAccesss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftserverlessEndpointAccessOutputProps>(
    AwsRedshiftserverlessEndpointAccess,
    idFilter,
    baseNode,
    optional,
  )
