import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsSnsSmsPreferencesInputSchema = TfMetaSchema.extend({
  default_sender_id: resolvableValue(z.string().optional()),
  default_sms_type: resolvableValue(z.string().optional()),
  delivery_status_iam_role_arn: resolvableValue(z.string().optional()),
  delivery_status_success_sampling_rate: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  monthly_spend_limit: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  usage_report_s3_bucket: resolvableValue(z.string().optional()),
})

export const AwsSnsSmsPreferencesOutputSchema = z.object({})

export type AwsSnsSmsPreferencesInputProps =
  & z.input<typeof AwsSnsSmsPreferencesInputSchema>
  & NodeProps

export type AwsSnsSmsPreferencesOutputProps =
  & z.output<typeof AwsSnsSmsPreferencesOutputSchema>
  & z.output<typeof AwsSnsSmsPreferencesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sns_sms_preferences

export function AwsSnsSmsPreferences(
  props: Partial<AwsSnsSmsPreferencesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sns_sms_preferences'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSnsSmsPreferencesInputSchema}
      _outputSchema={AwsSnsSmsPreferencesOutputSchema}
      {...props}
    />
  )
}

export const useAwsSnsSmsPreferencess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSnsSmsPreferencesOutputProps>(
    AwsSnsSmsPreferences,
    idFilter,
    baseNode,
    optional,
  )
