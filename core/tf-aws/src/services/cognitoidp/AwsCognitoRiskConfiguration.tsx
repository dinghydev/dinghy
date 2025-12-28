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
  user_pool_id: resolvableValue(z.string()),
  account_takeover_risk_configuration: resolvableValue(
    z.object({
      actions: z.object({
        high_action: z.object({
          event_action: z.string(),
          notify: z.boolean(),
        }).optional(),
        low_action: z.object({
          event_action: z.string(),
          notify: z.boolean(),
        }).optional(),
        medium_action: z.object({
          event_action: z.string(),
          notify: z.boolean(),
        }).optional(),
      }),
      notify_configuration: z.object({
        from: z.string().optional(),
        reply_to: z.string().optional(),
        source_arn: z.string(),
        block_email: z.object({
          html_body: z.string(),
          subject: z.string(),
          text_body: z.string(),
        }).optional(),
        mfa_email: z.object({
          html_body: z.string(),
          subject: z.string(),
          text_body: z.string(),
        }).optional(),
        no_action_email: z.object({
          html_body: z.string(),
          subject: z.string(),
          text_body: z.string(),
        }).optional(),
      }).optional(),
    }).optional(),
  ),
  client_id: resolvableValue(z.string().optional()),
  compromised_credentials_risk_configuration: resolvableValue(
    z.object({
      event_filter: z.string().array().optional(),
      actions: z.object({
        event_action: z.string(),
      }),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  risk_exception_configuration: resolvableValue(
    z.object({
      blocked_ip_range_list: z.string().array().optional(),
      skipped_ip_range_list: z.string().array().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cognito_risk_configuration

export function AwsCognitoRiskConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_risk_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoRiskConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCognitoRiskConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCognitoRiskConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCognitoRiskConfiguration,
    idFilter,
    baseNode,
    optional,
  )
