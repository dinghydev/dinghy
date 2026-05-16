import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsSecurityhubEnabledStandardsInputSchema = TfMetaSchema
  .extend({
    region: resolvableValue(z.string().optional()),
    standards_subscription_arns: resolvableValue(z.string().array().optional()),
  })

export const DataAwsSecurityhubEnabledStandardsOutputSchema = z.object({
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

export type DataAwsSecurityhubEnabledStandardsInputProps =
  & z.input<typeof DataAwsSecurityhubEnabledStandardsInputSchema>
  & NodeProps

export type DataAwsSecurityhubEnabledStandardsOutputProps =
  & z.output<typeof DataAwsSecurityhubEnabledStandardsOutputSchema>
  & z.output<typeof DataAwsSecurityhubEnabledStandardsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/securityhub_enabled_standards

export function DataAwsSecurityhubEnabledStandards(
  props: Partial<DataAwsSecurityhubEnabledStandardsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_enabled_standards'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSecurityhubEnabledStandardsInputSchema}
      _outputSchema={DataAwsSecurityhubEnabledStandardsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSecurityhubEnabledStandardss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSecurityhubEnabledStandardsOutputProps>(
    DataAwsSecurityhubEnabledStandards,
    idFilter,
    baseNode,
    optional,
  )
