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
  event_time_feature_name: resolvableValue(z.string()),
  feature_definition: resolvableValue(
    z.object({
      collection_type: z.string().optional(),
      feature_name: z.string().optional(),
      feature_type: z.string().optional(),
      collection_config: z.object({
        vector_config: z.object({
          dimension: z.number().optional(),
        }).optional(),
      }).optional(),
    }).array(),
  ),
  feature_group_name: resolvableValue(z.string()),
  record_identifier_feature_name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  offline_store_config: resolvableValue(
    z.object({
      disable_glue_table_creation: z.boolean().optional(),
      table_format: z.string().optional(),
      data_catalog_config: z.object({
        catalog: z.string().optional(),
        database: z.string().optional(),
        table_name: z.string().optional(),
      }).optional(),
      s3_storage_config: z.object({
        kms_key_id: z.string().optional(),
        resolved_output_s3_uri: z.string().optional(),
        s3_uri: z.string(),
      }),
    }).optional(),
  ),
  online_store_config: resolvableValue(
    z.object({
      enable_online_store: z.boolean().optional(),
      storage_type: z.string().optional(),
      security_config: z.object({
        kms_key_id: z.string().optional(),
      }).optional(),
      ttl_duration: z.object({
        unit: z.string().optional(),
        value: z.number().optional(),
      }).optional(),
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
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_feature_group

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

export const useAwsSagemakerFeatureGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsSagemakerFeatureGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerFeatureGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsSagemakerFeatureGroup,
    idFilter,
    baseNode,
    optional,
  )
