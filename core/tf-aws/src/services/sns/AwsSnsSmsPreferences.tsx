import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sns_sms_preferences

export const InputSchema = z.object({
  default_sender_id: resolvableValue(z.string().optional()),
  default_sms_type: resolvableValue(z.string().optional()),
  delivery_status_iam_role_arn: resolvableValue(z.string().optional()),
  delivery_status_success_sampling_rate: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  monthly_spend_limit: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  usage_report_s3_bucket: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSnsSmsPreferences(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sns_sms_preferences'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSnsSmsPreferencess = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSnsSmsPreferences, node, id)
