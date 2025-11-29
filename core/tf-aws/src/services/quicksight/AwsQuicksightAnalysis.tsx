import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/quicksight_analysis

export const InputSchema = z.object({
  analysis_id: resolvableValue(z.string()),
  last_published_time: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  definition: resolvableValue(
    z.object({
      analysis_defaults: z.object({
        default_new_sheet_configuration: z.object({
          sheet_content_type: z.string().optional(),
        }),
      }).optional(),
      calculated_fields: z.object({
        data_set_identifier: z.string(),
        expression: z.string(),
        name: z.string(),
      }).array().optional(),
      column_configurations: z.object({
        role: z.string().optional(),
      }).optional(),
      data_set_identifiers_declarations: z.object({
        data_set_arn: z.string().optional(),
        identifier: z.string().optional(),
      }),
      filter_groups: z.object({
        cross_dataset: z.string(),
        filter_group_id: z.string(),
        status: z.string().optional(),
      }).optional(),
      parameter_declarations: z.object({
        date_time_parameter_declaration: z.object({
          name: z.string(),
          time_granularity: z.string().optional(),
        }).optional(),
        decimal_parameter_declaration: z.object({
          name: z.string(),
          parameter_value_type: z.string(),
        }).optional(),
        integer_parameter_declaration: z.object({
          name: z.string(),
          parameter_value_type: z.string(),
        }).optional(),
        string_parameter_declaration: z.object({
          name: z.string(),
          parameter_value_type: z.string(),
        }).optional(),
      }).array().optional(),
      sheets: z.object({
        content_type: z.string().optional(),
        description: z.string().optional(),
        name: z.string().optional(),
        sheet_id: z.string(),
        title: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  parameters: resolvableValue(
    z.object({
      date_time_parameters: z.object({
        name: z.string(),
        values: z.string().array(),
      }).optional(),
      decimal_parameters: z.object({
        name: z.string(),
        values: z.number().array(),
      }).optional(),
      integer_parameters: z.object({
        name: z.string(),
        values: z.number().array(),
      }).optional(),
      string_parameters: z.object({
        name: z.string(),
        values: z.string().array(),
      }).optional(),
    }).optional(),
  ),
  permissions: resolvableValue(
    z.object({
      actions: z.string().array(),
      principal: z.string(),
    }).array().optional(),
  ),
  recovery_window_in_days: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  source_entity: resolvableValue(
    z.object({
      source_template: z.object({
        arn: z.string(),
      }).optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  theme_arn: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_time: z.string().optional(),
  id: z.string().optional(),
  last_updated_time: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsQuicksightAnalysis(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_analysis'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightAnalysiss = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsQuicksightAnalysis, node, id)
