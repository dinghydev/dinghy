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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/iot_indexing_configuration

export function AwsIotIndexingConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_indexing_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIotIndexingConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsIotIndexingConfiguration,
    idFilter,
    baseNode,
    optional,
  )
