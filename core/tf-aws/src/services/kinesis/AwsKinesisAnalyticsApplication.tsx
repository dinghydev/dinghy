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
  name: resolvableValue(z.string()),
  cloudwatch_logging_options: resolvableValue(
    z.object({
      id: z.string(),
      log_stream_arn: z.string(),
      role_arn: z.string(),
    }).optional(),
  ),
  code: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  inputs: resolvableValue(
    z.object({
      id: z.string(),
      name_prefix: z.string(),
      stream_names: z.string().array(),
      kinesis_firehose: z.object({
        resource_arn: z.string(),
        role_arn: z.string(),
      }).optional(),
      kinesis_stream: z.object({
        resource_arn: z.string(),
        role_arn: z.string(),
      }).optional(),
      parallelism: z.object({
        count: z.number().optional(),
      }).optional(),
      processing_configuration: z.object({
        lambda: z.object({
          resource_arn: z.string(),
          role_arn: z.string(),
        }),
      }).optional(),
      schema: z.object({
        record_encoding: z.string().optional(),
        record_columns: z.object({
          mapping: z.string().optional(),
          name: z.string(),
          sql_type: z.string(),
        }).array(),
        record_format: z.object({
          record_format_type: z.string(),
          mapping_parameters: z.object({
            csv: z.object({
              record_column_delimiter: z.string(),
              record_row_delimiter: z.string(),
            }).optional(),
            json: z.object({
              record_row_path: z.string(),
            }).optional(),
          }).optional(),
        }),
      }),
      starting_position_configuration: z.object({
        starting_position: z.string().optional(),
      }).array().optional(),
    }).optional(),
  ),
  outputs: resolvableValue(
    z.object({
      id: z.string(),
      name: z.string(),
      kinesis_firehose: z.object({
        resource_arn: z.string(),
        role_arn: z.string(),
      }).optional(),
      kinesis_stream: z.object({
        resource_arn: z.string(),
        role_arn: z.string(),
      }).optional(),
      lambda: z.object({
        resource_arn: z.string(),
        role_arn: z.string(),
      }).optional(),
      schema: z.object({
        record_format_type: z.string(),
      }),
    }).array().optional(),
  ),
  reference_data_sources: resolvableValue(
    z.object({
      id: z.string(),
      table_name: z.string(),
      s3: z.object({
        bucket_arn: z.string(),
        file_key: z.string(),
        role_arn: z.string(),
      }),
      schema: z.object({
        record_encoding: z.string().optional(),
        record_columns: z.object({
          mapping: z.string().optional(),
          name: z.string(),
          sql_type: z.string(),
        }).array(),
        record_format: z.object({
          record_format_type: z.string(),
          mapping_parameters: z.object({
            csv: z.object({
              record_column_delimiter: z.string(),
              record_row_delimiter: z.string(),
            }).optional(),
            json: z.object({
              record_row_path: z.string(),
            }).optional(),
          }).optional(),
        }),
      }),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  start_application: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  create_timestamp: z.string().optional(),
  id: z.string().optional(),
  last_update_timestamp: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/kinesis_analytics_application

export function AwsKinesisAnalyticsApplication(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kinesis_analytics_application'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsKinesisAnalyticsApplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsKinesisAnalyticsApplication,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsKinesisAnalyticsApplications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsKinesisAnalyticsApplication,
    idFilter,
    baseNode,
    optional,
  )
