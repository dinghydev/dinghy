import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_feature_group

export const InputSchema = z.object({
  event_time_feature_name: resolvableValue(z.string()),
  feature_group_name: resolvableValue(z.string()),
  record_identifier_feature_name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  feature_definition: resolvableValue(z.object({
    collection_type: z.string().optional(),
    feature_name: z.string().optional(),
    feature_type: z.string().optional(),
  })),
  id: resolvableValue(z.string().optional()),
  offline_store_config: resolvableValue(
    z.object({
      disable_glue_table_creation: z.boolean().optional(),
      table_format: z.string().optional(),
    }).optional(),
  ),
  online_store_config: resolvableValue(
    z.object({
      enable_online_store: z.boolean().optional(),
      storage_type: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  throughput_config: resolvableValue(
    z.object({
      provisioned_read_capacity_units: z.number().optional(),
      provisioned_write_capacity_units: z.number().optional(),
      throughput_mode: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSagemakerFeatureGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_feature_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerFeatureGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSagemakerFeatureGroup, node, id)

export const useAwsSagemakerFeatureGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSagemakerFeatureGroup, node, id)
