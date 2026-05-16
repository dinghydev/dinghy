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

export const AwsS3filesSynchronizationConfigurationInputSchema = TfMetaSchema
  .extend({
    file_system_id: resolvableValue(z.string()),
    expiration_data_rule: resolvableValue(
      z.object({
        days_after_last_access: z.number(),
      }).array().optional(),
    ),
    import_data_rule: resolvableValue(
      z.object({
        prefix: z.string(),
        size_less_than: z.number(),
        trigger: z.string(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
  })

export const AwsS3filesSynchronizationConfigurationOutputSchema = z.object({
  latest_version_number: z.number().optional(),
})

export const AwsS3filesSynchronizationConfigurationImportSchema = z.object({
  file_system_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsS3filesSynchronizationConfigurationInputProps =
  & z.input<typeof AwsS3filesSynchronizationConfigurationInputSchema>
  & z.input<typeof AwsS3filesSynchronizationConfigurationImportSchema>
  & NodeProps

export type AwsS3filesSynchronizationConfigurationOutputProps =
  & z.output<typeof AwsS3filesSynchronizationConfigurationOutputSchema>
  & z.output<typeof AwsS3filesSynchronizationConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3files_synchronization_configuration

export function AwsS3filesSynchronizationConfiguration(
  props: Partial<AwsS3filesSynchronizationConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3files_synchronization_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3filesSynchronizationConfigurationInputSchema}
      _outputSchema={AwsS3filesSynchronizationConfigurationOutputSchema}
      _importSchema={AwsS3filesSynchronizationConfigurationImportSchema}
      {...props}
    />
  )
}

export const useAwsS3filesSynchronizationConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3filesSynchronizationConfigurationOutputProps>(
    AwsS3filesSynchronizationConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3filesSynchronizationConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3filesSynchronizationConfigurationOutputProps>(
    AwsS3filesSynchronizationConfiguration,
    idFilter,
    baseNode,
    optional,
  )
