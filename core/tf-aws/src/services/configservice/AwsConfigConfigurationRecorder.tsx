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

export const AwsConfigConfigurationRecorderInputSchema = TfMetaSchema.extend({
  role_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  recording_group: resolvableValue(
    z.object({
      all_supported: z.boolean().optional(),
      include_global_resource_types: z.boolean().optional(),
      resource_types: z.string().array().optional(),
      exclusion_by_resource_types: z.object({
        resource_types: z.string().array().optional(),
      }).array().optional(),
      recording_strategy: z.object({
        use_only: z.string().optional(),
      }).array().optional(),
    }).optional(),
  ),
  recording_mode: resolvableValue(
    z.object({
      recording_frequency: z.string().optional(),
      recording_mode_override: z.object({
        description: z.string().optional(),
        recording_frequency: z.string(),
        resource_types: z.string().array(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const AwsConfigConfigurationRecorderOutputSchema = z.object({})

export const AwsConfigConfigurationRecorderImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsConfigConfigurationRecorderInputProps =
  & z.input<typeof AwsConfigConfigurationRecorderInputSchema>
  & z.input<typeof AwsConfigConfigurationRecorderImportSchema>
  & NodeProps

export type AwsConfigConfigurationRecorderOutputProps =
  & z.output<typeof AwsConfigConfigurationRecorderOutputSchema>
  & z.output<typeof AwsConfigConfigurationRecorderInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/config_configuration_recorder

export function AwsConfigConfigurationRecorder(
  props: Partial<AwsConfigConfigurationRecorderInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_config_configuration_recorder'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConfigConfigurationRecorderInputSchema}
      _outputSchema={AwsConfigConfigurationRecorderOutputSchema}
      _importSchema={AwsConfigConfigurationRecorderImportSchema}
      {...props}
    />
  )
}

export const useAwsConfigConfigurationRecorder = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsConfigConfigurationRecorderOutputProps>(
    AwsConfigConfigurationRecorder,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConfigConfigurationRecorders = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsConfigConfigurationRecorderOutputProps>(
    AwsConfigConfigurationRecorder,
    idFilter,
    baseNode,
    optional,
  )
