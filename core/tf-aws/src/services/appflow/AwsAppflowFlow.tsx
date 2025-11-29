import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appflow_flow

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  trigger_config: resolvableValue(z.object({
    trigger_type: z.string(),
  })),
  description: resolvableValue(z.string().optional()),
  destination_flow_config: resolvableValue(z.object({
    api_version: z.string().optional(),
    connector_profile_name: z.string().optional(),
    connector_type: z.string(),
  })),
  id: resolvableValue(z.string().optional()),
  kms_arn: resolvableValue(z.string().optional()),
  metadata_catalog_config: resolvableValue(
    z.object({
      glue_data_catalog: z.object({
        database_name: z.string(),
        role_arn: z.string(),
        table_prefix: z.string(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  source_flow_config: resolvableValue(z.object({
    api_version: z.string().optional(),
    connector_profile_name: z.string().optional(),
    connector_type: z.string(),
  })),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  task: resolvableValue(
    z.object({
      destination_field: z.string().optional(),
      source_fields: z.string().array().optional(),
      task_properties: z.record(z.string(), z.string()).optional(),
      task_type: z.string(),
    }).array(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  flow_status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAppflowFlow(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appflow_flow'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsAppflowFlow = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppflowFlow, node, id)

export const useAwsAppflowFlows = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAppflowFlow, node, id)
