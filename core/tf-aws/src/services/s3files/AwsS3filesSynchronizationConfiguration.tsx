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

export const InputSchema = TfMetaSchema.extend({
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

export const OutputSchema = z.object({
  latest_version_number: z.number().optional(),
})

export const ImportSchema = z.object({
  file_system_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3files_synchronization_configuration

export function AwsS3filesSynchronizationConfiguration(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsS3filesSynchronizationConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsS3filesSynchronizationConfiguration,
    idFilter,
    baseNode,
    optional,
  )
