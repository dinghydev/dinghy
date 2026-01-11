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
  config_id: resolvableValue(z.string()),
  storage_lens_configuration: resolvableValue(z.object({
    enabled: z.boolean(),
    account_level: z.object({
      activity_metrics: z.object({
        enabled: z.boolean().optional(),
      }).optional(),
      advanced_cost_optimization_metrics: z.object({
        enabled: z.boolean().optional(),
      }).optional(),
      advanced_data_protection_metrics: z.object({
        enabled: z.boolean().optional(),
      }).optional(),
      bucket_level: z.object({
        activity_metrics: z.object({
          enabled: z.boolean().optional(),
        }).optional(),
        advanced_cost_optimization_metrics: z.object({
          enabled: z.boolean().optional(),
        }).optional(),
        advanced_data_protection_metrics: z.object({
          enabled: z.boolean().optional(),
        }).optional(),
        detailed_status_code_metrics: z.object({
          enabled: z.boolean().optional(),
        }).optional(),
        prefix_level: z.object({
          storage_metrics: z.object({
            enabled: z.boolean().optional(),
            selection_criteria: z.object({
              delimiter: z.string().optional(),
              max_depth: z.number().optional(),
              min_storage_bytes_percentage: z.number().optional(),
            }).optional(),
          }),
        }).optional(),
      }),
      detailed_status_code_metrics: z.object({
        enabled: z.boolean().optional(),
      }).optional(),
    }),
    aws_org: z.object({
      arn: z.string(),
    }).optional(),
    data_export: z.object({
      cloud_watch_metrics: z.object({
        enabled: z.boolean(),
      }).optional(),
      s3_bucket_destination: z.object({
        account_id: z.string(),
        arn: z.string(),
        format: z.string(),
        output_schema_version: z.string(),
        prefix: z.string().optional(),
        encryption: z.object({
          sse_kms: z.object({
            key_id: z.string(),
          }).optional(),
          sse_s3: z.object({}).array().optional(),
        }).optional(),
      }).optional(),
    }).optional(),
    exclude: z.object({
      buckets: z.string().array().optional(),
      regions: z.string().array().optional(),
    }).optional(),
    include: z.object({
      buckets: z.string().array().optional(),
      regions: z.string().array().optional(),
    }).optional(),
  })),
  account_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3control_storage_lens_configuration

export function AwsS3controlStorageLensConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3control_storage_lens_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3controlStorageLensConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsS3controlStorageLensConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3controlStorageLensConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsS3controlStorageLensConfiguration,
    idFilter,
    baseNode,
    optional,
  )
