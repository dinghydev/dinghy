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

export const AwsIotIndexingConfigurationInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  thing_group_indexing_configuration: resolvableValue(
    z.object({
      thing_group_indexing_mode: z.string(),
      custom_field: z.object({
        name: z.string().optional(),
        type: z.string().optional(),
      }).array().optional(),
      managed_field: z.object({
        name: z.string().optional(),
        type: z.string().optional(),
      }).array().optional(),
    }).optional(),
  ),
  thing_indexing_configuration: resolvableValue(
    z.object({
      device_defender_indexing_mode: z.string().optional(),
      named_shadow_indexing_mode: z.string().optional(),
      thing_connectivity_indexing_mode: z.string().optional(),
      thing_indexing_mode: z.string(),
      custom_field: z.object({
        name: z.string().optional(),
        type: z.string().optional(),
      }).array().optional(),
      filter: z.object({
        named_shadow_names: z.string().array().optional(),
      }).optional(),
      managed_field: z.object({
        name: z.string().optional(),
        type: z.string().optional(),
      }).array().optional(),
    }).optional(),
  ),
})

export const AwsIotIndexingConfigurationOutputSchema = z.object({})

export type AwsIotIndexingConfigurationInputProps =
  & z.input<typeof AwsIotIndexingConfigurationInputSchema>
  & NodeProps

export type AwsIotIndexingConfigurationOutputProps =
  & z.output<typeof AwsIotIndexingConfigurationOutputSchema>
  & z.output<typeof AwsIotIndexingConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iot_indexing_configuration

export function AwsIotIndexingConfiguration(
  props: Partial<AwsIotIndexingConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_indexing_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIotIndexingConfigurationInputSchema}
      _outputSchema={AwsIotIndexingConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsIotIndexingConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIotIndexingConfigurationOutputProps>(
    AwsIotIndexingConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIotIndexingConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIotIndexingConfigurationOutputProps>(
    AwsIotIndexingConfiguration,
    idFilter,
    baseNode,
    optional,
  )
