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
  job_arn: resolvableValue(z.string()),
  job_id: resolvableValue(z.string()),
  job_type: resolvableValue(z.string()),
  s3_job_definition: resolvableValue(z.object({
    bucket_criteria: z.object({
      excludes: z.object({
        and: z.object({
          simple_criterion: z.object({
            comparator: z.string().optional(),
            key: z.string().optional(),
            values: z.string().array().optional(),
          }).optional(),
          tag_criterion: z.object({
            comparator: z.string().optional(),
            tag_values: z.object({
              key: z.string().optional(),
              value: z.string().optional(),
            }).array().optional(),
          }).optional(),
        }).array().optional(),
      }).optional(),
      includes: z.object({
        and: z.object({
          simple_criterion: z.object({
            comparator: z.string().optional(),
            key: z.string().optional(),
            values: z.string().array().optional(),
          }).optional(),
          tag_criterion: z.object({
            comparator: z.string().optional(),
            tag_values: z.object({
              key: z.string().optional(),
              value: z.string().optional(),
            }).array().optional(),
          }).optional(),
        }).array().optional(),
      }).optional(),
    }).optional(),
    bucket_definitions: z.object({
      account_id: z.string(),
      buckets: z.string().array(),
    }).array().optional(),
    scoping: z.object({
      excludes: z.object({
        and: z.object({
          simple_scope_term: z.object({
            comparator: z.string().optional(),
            key: z.string().optional(),
            values: z.string().array().optional(),
          }).optional(),
          tag_scope_term: z.object({
            comparator: z.string().optional(),
            key: z.string().optional(),
            target: z.string().optional(),
            tag_values: z.object({
              key: z.string().optional(),
              value: z.string().optional(),
            }).array().optional(),
          }).optional(),
        }).array().optional(),
      }).optional(),
      includes: z.object({
        and: z.object({
          simple_scope_term: z.object({
            comparator: z.string().optional(),
            key: z.string().optional(),
            values: z.string().array().optional(),
          }).optional(),
          tag_scope_term: z.object({
            comparator: z.string().optional(),
            key: z.string().optional(),
            target: z.string().optional(),
            tag_values: z.object({
              key: z.string().optional(),
              value: z.string().optional(),
            }).array().optional(),
          }).optional(),
        }).array().optional(),
      }).optional(),
    }).optional(),
  })),
  custom_data_identifier_ids: resolvableValue(z.string().array().optional()),
  description: resolvableValue(z.string().optional()),
  initial_run: resolvableValue(z.boolean().optional()),
  job_status: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  sampling_percentage: resolvableValue(z.number().optional()),
  schedule_frequency: resolvableValue(
    z.object({
      daily_schedule: z.boolean().optional(),
      monthly_schedule: z.number().optional(),
      weekly_schedule: z.string().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  created_at: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  user_paused_details: z.object({
    job_expires_at: z.string(),
    job_imminent_expiration_health_event_arn: z.string(),
    job_paused_at: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/macie2_classification_job

export function AwsMacie2ClassificationJob(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_macie2_classification_job'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsMacie2ClassificationJob = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsMacie2ClassificationJob, idFilter, baseNode)

export const useAwsMacie2ClassificationJobs = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsMacie2ClassificationJob, idFilter, baseNode)
