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

export const AwsObservabilityadminCentralizationRuleForOrganizationInputSchema =
  TfMetaSchema.extend({
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
            log_group_name_configuration: z.object({
              log_group_name_pattern: z.string(),
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
            data_source_selection_criteria: z.string().optional(),
            encrypted_log_group_strategy: z.string(),
            log_group_selection_criteria: z.string().optional(),
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
  })

export const AwsObservabilityadminCentralizationRuleForOrganizationOutputSchema =
  z.object({
    rule_arn: z.string().optional(),
    tags_all: z.record(z.string(), z.string()).optional(),
  })

export type AwsObservabilityadminCentralizationRuleForOrganizationInputProps =
  & z.input<
    typeof AwsObservabilityadminCentralizationRuleForOrganizationInputSchema
  >
  & NodeProps

export type AwsObservabilityadminCentralizationRuleForOrganizationOutputProps =
  & z.output<
    typeof AwsObservabilityadminCentralizationRuleForOrganizationOutputSchema
  >
  & z.output<
    typeof AwsObservabilityadminCentralizationRuleForOrganizationInputSchema
  >
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/observabilityadmin_centralization_rule_for_organization

export function AwsObservabilityadminCentralizationRuleForOrganization(
  props: Partial<
    AwsObservabilityadminCentralizationRuleForOrganizationInputProps
  >,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_observabilityadmin_centralization_rule_for_organization'
      _category='resource'
      _title={_title}
      _inputSchema={AwsObservabilityadminCentralizationRuleForOrganizationInputSchema}
      _outputSchema={AwsObservabilityadminCentralizationRuleForOrganizationOutputSchema}
      {...props}
    />
  )
}

export const useAwsObservabilityadminCentralizationRuleForOrganization = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<
    AwsObservabilityadminCentralizationRuleForOrganizationOutputProps
  >(
    AwsObservabilityadminCentralizationRuleForOrganization,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsObservabilityadminCentralizationRuleForOrganizations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<
    AwsObservabilityadminCentralizationRuleForOrganizationOutputProps
  >(
    AwsObservabilityadminCentralizationRuleForOrganization,
    idFilter,
    baseNode,
    optional,
  )
