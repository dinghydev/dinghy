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
  rule_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  rule: resolvableValue(
    z.object({
      destination: z.object({
        account: z.string(),
        region: z.string(),
        destination_logs_configuration: z.object({
          backup_configuration: z.object({
            kms_key_arn: z.string().optional(),
            region: z.string().optional(),
          }).array().optional(),
          logs_encryption_configuration: z.object({
            encryption_conflict_resolution_strategy: z.string().optional(),
            encryption_strategy: z.string(),
            kms_key_arn: z.string().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
      source: z.object({
        regions: z.string().array(),
        scope: z.string(),
        source_logs_configuration: z.object({
          encrypted_log_group_strategy: z.string(),
          log_group_selection_criteria: z.string(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
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
  rule_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/observabilityadmin_centralization_rule_for_organization

export function AwsObservabilityadminCentralizationRuleForOrganization(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_observabilityadmin_centralization_rule_for_organization'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsObservabilityadminCentralizationRuleForOrganization = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    AwsObservabilityadminCentralizationRuleForOrganization,
    idFilter,
    baseNode,
  )

export const useAwsObservabilityadminCentralizationRuleForOrganizations = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    AwsObservabilityadminCentralizationRuleForOrganization,
    idFilter,
    baseNode,
  )
