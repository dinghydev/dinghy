import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/networkfirewall_tls_inspection_configuration

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
      }).optional(),
    }).optional(),
  ),
})

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

export function AwsNetworkfirewallTlsInspectionConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsNetworkfirewallTlsInspectionConfiguration,
    node,
    id,
  )

export const useAwsNetworkfirewallTlsInspectionConfigurations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsNetworkfirewallTlsInspectionConfiguration,
    node,
    id,
  )
