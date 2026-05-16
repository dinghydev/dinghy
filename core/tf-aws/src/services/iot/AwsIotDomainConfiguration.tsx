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

export const AwsIotDomainConfigurationInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  application_protocol: resolvableValue(z.string().optional()),
  authentication_type: resolvableValue(z.string().optional()),
  authorizer_config: resolvableValue(
    z.object({
      allow_authorizer_override: z.boolean().optional(),
      default_authorizer_name: z.string().optional(),
    }).optional(),
  ),
  domain_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  server_certificate_arns: resolvableValue(z.string().array().optional()),
  service_type: resolvableValue(z.string().optional()),
  status: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tls_config: resolvableValue(
    z.object({
      security_policy: z.string().optional(),
    }).optional(),
  ),
  validation_certificate_arn: resolvableValue(z.string().optional()),
})

export const AwsIotDomainConfigurationOutputSchema = z.object({
  arn: z.string().optional(),
  domain_type: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsIotDomainConfigurationInputProps =
  & z.input<typeof AwsIotDomainConfigurationInputSchema>
  & NodeProps

export type AwsIotDomainConfigurationOutputProps =
  & z.output<typeof AwsIotDomainConfigurationOutputSchema>
  & z.output<typeof AwsIotDomainConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iot_domain_configuration

export function AwsIotDomainConfiguration(
  props: Partial<AwsIotDomainConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_domain_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIotDomainConfigurationInputSchema}
      _outputSchema={AwsIotDomainConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsIotDomainConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIotDomainConfigurationOutputProps>(
    AwsIotDomainConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIotDomainConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIotDomainConfigurationOutputProps>(
    AwsIotDomainConfiguration,
    idFilter,
    baseNode,
    optional,
  )
