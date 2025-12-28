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
  id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  description: resolvableValue(z.string().optional()),
  encryption_configuration: resolvableValue(
    z.object({
      key_id: z.string(),
      type: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  tls_inspection_configuration: resolvableValue(
    z.object({
      server_certificate_configuration: z.object({
        certificate_authority_arn: z.string().optional(),
        check_certificate_revocation_status: z.object({
          revoked_status_action: z.string().optional(),
          unknown_status_action: z.string().optional(),
        }).array().optional(),
        scope: z.object({
          protocols: z.number().array(),
          destination: z.object({
            address_definition: z.string(),
          }).array().optional(),
          destination_ports: z.object({
            from_port: z.number(),
            to_port: z.number(),
          }).array().optional(),
          source: z.object({
            address_definition: z.string(),
          }).array().optional(),
          source_ports: z.object({
            from_port: z.number(),
            to_port: z.number(),
          }).array().optional(),
        }).array().optional(),
        server_certificate: z.object({
          resource_arn: z.string().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  certificate_authority: z.object({
    certificate_arn: z.string(),
    certificate_serial: z.string(),
    status: z.string(),
    status_message: z.string(),
  }).array().optional(),
  certificates: z.object({
    certificate_arn: z.string(),
    certificate_serial: z.string(),
    status: z.string(),
    status_message: z.string(),
  }).array().optional(),
  number_of_associations: z.number().optional(),
  tls_inspection_configuration_id: z.string().optional(),
  update_token: z.string().optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/networkfirewall_tls_inspection_configuration

export function AwsNetworkfirewallTlsInspectionConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkfirewall_tls_inspection_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsNetworkfirewallTlsInspectionConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsNetworkfirewallTlsInspectionConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkfirewallTlsInspectionConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsNetworkfirewallTlsInspectionConfiguration,
    idFilter,
    baseNode,
    optional,
  )
