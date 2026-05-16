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

export const AwsConfigRetentionConfigurationInputSchema = TfMetaSchema.extend({
  retention_period_in_days: resolvableValue(z.number()),
  region: resolvableValue(z.string().optional()),
})

export const AwsConfigRetentionConfigurationOutputSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
})

export const AwsConfigRetentionConfigurationImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsConfigRetentionConfigurationInputProps =
  & z.input<typeof AwsConfigRetentionConfigurationInputSchema>
  & z.input<typeof AwsConfigRetentionConfigurationImportSchema>
  & NodeProps

export type AwsConfigRetentionConfigurationOutputProps =
  & z.output<typeof AwsConfigRetentionConfigurationOutputSchema>
  & z.output<typeof AwsConfigRetentionConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/config_retention_configuration

export function AwsConfigRetentionConfiguration(
  props: Partial<AwsConfigRetentionConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_config_retention_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConfigRetentionConfigurationInputSchema}
      _outputSchema={AwsConfigRetentionConfigurationOutputSchema}
      _importSchema={AwsConfigRetentionConfigurationImportSchema}
      {...props}
    />
  )
}

export const useAwsConfigRetentionConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsConfigRetentionConfigurationOutputProps>(
    AwsConfigRetentionConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConfigRetentionConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsConfigRetentionConfigurationOutputProps>(
    AwsConfigRetentionConfiguration,
    idFilter,
    baseNode,
    optional,
  )
