import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
  standards_subscription_arns: resolvableValue(z.string().array().optional()),
})

export const OutputSchema = z.object({
  standards_subscriptions: z.object({
    standards_arn: z.string(),
    standards_controls_updatable: z.string(),
    standards_inputs: z.record(z.string(), z.string()),
    standards_status: z.string(),
    standards_status_reason: z.object({
      status_reason_code: z.string(),
    }).array(),
    standards_subscription_arn: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/securityhub_enabled_standards

export function DataAwsSecurityhubEnabledStandards(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_enabled_standards'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSecurityhubEnabledStandardss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsSecurityhubEnabledStandards,
    idFilter,
    baseNode,
    optional,
  )
