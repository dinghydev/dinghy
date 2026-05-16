import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsConfigConfigurationRecorderStatusInputSchema = TfMetaSchema
  .extend({
    is_enabled: resolvableValue(z.boolean()),
    name: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsConfigConfigurationRecorderStatusOutputSchema = z.object({})

export const AwsConfigConfigurationRecorderStatusImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsConfigConfigurationRecorderStatusInputProps =
  & z.input<typeof AwsConfigConfigurationRecorderStatusInputSchema>
  & z.input<typeof AwsConfigConfigurationRecorderStatusImportSchema>
  & NodeProps

export type AwsConfigConfigurationRecorderStatusOutputProps =
  & z.output<typeof AwsConfigConfigurationRecorderStatusOutputSchema>
  & z.output<typeof AwsConfigConfigurationRecorderStatusInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/config_configuration_recorder_status

export function AwsConfigConfigurationRecorderStatus(
  props: Partial<AwsConfigConfigurationRecorderStatusInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_config_configuration_recorder_status'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConfigConfigurationRecorderStatusInputSchema}
      _outputSchema={AwsConfigConfigurationRecorderStatusOutputSchema}
      _importSchema={AwsConfigConfigurationRecorderStatusImportSchema}
      {...props}
    />
  )
}

export const useAwsConfigConfigurationRecorderStatuss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsConfigConfigurationRecorderStatusOutputProps>(
    AwsConfigConfigurationRecorderStatus,
    idFilter,
    baseNode,
    optional,
  )
