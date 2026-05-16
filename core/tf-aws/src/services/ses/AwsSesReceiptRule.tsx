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

export const AwsSesReceiptRuleInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  rule_set_name: resolvableValue(z.string()),
  add_header_action: resolvableValue(
    z.object({
      header_name: z.string(),
      header_value: z.string(),
      position: z.number(),
    }).array().optional(),
  ),
  after: resolvableValue(z.string().optional()),
  bounce_action: resolvableValue(
    z.object({
      message: z.string(),
      position: z.number(),
      sender: z.string(),
      smtp_reply_code: z.string(),
      status_code: z.string().optional(),
      topic_arn: z.string().optional(),
    }).array().optional(),
  ),
  enabled: resolvableValue(z.boolean().optional()),
  lambda_action: resolvableValue(
    z.object({
      function_arn: z.string(),
      invocation_type: z.string().optional(),
      position: z.number(),
      topic_arn: z.string().optional(),
    }).array().optional(),
  ),
  recipients: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  s3_action: resolvableValue(
    z.object({
      bucket_name: z.string(),
      iam_role_arn: z.string().optional(),
      kms_key_arn: z.string().optional(),
      object_key_prefix: z.string().optional(),
      position: z.number(),
      topic_arn: z.string().optional(),
    }).array().optional(),
  ),
  scan_enabled: resolvableValue(z.boolean().optional()),
  sns_action: resolvableValue(
    z.object({
      encoding: z.string().optional(),
      position: z.number(),
      topic_arn: z.string(),
    }).array().optional(),
  ),
  stop_action: resolvableValue(
    z.object({
      position: z.number(),
      scope: z.string(),
      topic_arn: z.string().optional(),
    }).array().optional(),
  ),
  tls_policy: resolvableValue(z.string().optional()),
  workmail_action: resolvableValue(
    z.object({
      organization_arn: z.string(),
      position: z.number(),
      topic_arn: z.string().optional(),
    }).array().optional(),
  ),
})

export const AwsSesReceiptRuleOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsSesReceiptRuleInputProps =
  & z.input<typeof AwsSesReceiptRuleInputSchema>
  & NodeProps

export type AwsSesReceiptRuleOutputProps =
  & z.output<typeof AwsSesReceiptRuleOutputSchema>
  & z.output<typeof AwsSesReceiptRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ses_receipt_rule

export function AwsSesReceiptRule(props: Partial<AwsSesReceiptRuleInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ses_receipt_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesReceiptRuleInputSchema}
      _outputSchema={AwsSesReceiptRuleOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesReceiptRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSesReceiptRuleOutputProps>(
    AwsSesReceiptRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesReceiptRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesReceiptRuleOutputProps>(
    AwsSesReceiptRule,
    idFilter,
    baseNode,
    optional,
  )
