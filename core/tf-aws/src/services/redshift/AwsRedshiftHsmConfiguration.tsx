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

export const AwsRedshiftHsmConfigurationInputSchema = TfMetaSchema.extend({
  description: resolvableValue(z.string()),
  hsm_configuration_identifier: resolvableValue(z.string()),
  hsm_ip_address: resolvableValue(z.string()),
  hsm_partition_name: resolvableValue(z.string()),
  hsm_partition_password: resolvableValue(z.string()),
  hsm_server_public_certificate: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsRedshiftHsmConfigurationOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRedshiftHsmConfigurationInputProps =
  & z.input<typeof AwsRedshiftHsmConfigurationInputSchema>
  & NodeProps

export type AwsRedshiftHsmConfigurationOutputProps =
  & z.output<typeof AwsRedshiftHsmConfigurationOutputSchema>
  & z.output<typeof AwsRedshiftHsmConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_hsm_configuration

export function AwsRedshiftHsmConfiguration(
  props: Partial<AwsRedshiftHsmConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_hsm_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftHsmConfigurationInputSchema}
      _outputSchema={AwsRedshiftHsmConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftHsmConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftHsmConfigurationOutputProps>(
    AwsRedshiftHsmConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftHsmConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftHsmConfigurationOutputProps>(
    AwsRedshiftHsmConfiguration,
    idFilter,
    baseNode,
    optional,
  )
