import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ssm_association

export const InputSchema = z.object({
  apply_only_at_cron_interval: resolvableValue(z.boolean().optional()),
  association_name: resolvableValue(z.string().optional()),
  automation_target_parameter_name: resolvableValue(z.string().optional()),
  compliance_severity: resolvableValue(z.string().optional()),
  document_version: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  max_concurrency: resolvableValue(z.string().optional()),
  max_errors: resolvableValue(z.string().optional()),
  output_location: resolvableValue(
    z.object({
      s3_bucket_name: z.string(),
      s3_key_prefix: z.string().optional(),
      s3_region: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  schedule_expression: resolvableValue(z.string().optional()),
  sync_compliance: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  targets: resolvableValue(
    z.object({
      key: z.string(),
      values: z.string().array(),
    }).optional(),
  ),
  wait_for_success_timeout_seconds: resolvableValue(z.number().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  association_id: z.string().optional(),
  name: z.string().optional(),
  parameters: z.record(z.string(), z.string()).optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  association_id: resolvableValue(z.string()),
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

export function AwsSsmAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSsmAssociation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSsmAssociation, node, id)

export const useAwsSsmAssociations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSsmAssociation, node, id)
