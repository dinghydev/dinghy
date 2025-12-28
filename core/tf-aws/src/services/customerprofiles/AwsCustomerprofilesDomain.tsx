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
  default_expiration_days: resolvableValue(z.number()),
  domain_name: resolvableValue(z.string()),
  dead_letter_queue_url: resolvableValue(z.string().optional()),
  default_encryption_key: resolvableValue(z.string().optional()),
  matching: resolvableValue(
    z.object({
      enabled: z.boolean(),
      auto_merging: z.object({
        enabled: z.boolean(),
        min_allowed_confidence_score_for_merging: z.number().optional(),
        conflict_resolution: z.object({
          conflict_resolving_model: z.string(),
          source_name: z.string().optional(),
        }).optional(),
        consolidation: z.object({
          matching_attributes_list: z.string().array().array(),
        }).optional(),
      }).optional(),
      exporting_config: z.object({
        s3_exporting: z.object({
          s3_bucket_name: z.string(),
          s3_key_name: z.string().optional(),
        }).optional(),
      }).optional(),
      job_schedule: z.object({
        day_of_the_week: z.string(),
        time: z.string(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  rule_based_matching: resolvableValue(
    z.object({
      enabled: z.boolean(),
      max_allowed_rule_level_for_matching: z.number().optional(),
      max_allowed_rule_level_for_merging: z.number().optional(),
      status: z.string().optional(),
      attribute_types_selector: z.object({
        address: z.string().array().optional(),
        attribute_matching_model: z.string(),
        email_address: z.string().array().optional(),
        phone_number: z.string().array().optional(),
      }).optional(),
      conflict_resolution: z.object({
        conflict_resolving_model: z.string(),
        source_name: z.string().optional(),
      }).optional(),
      exporting_config: z.object({
        s3_exporting: z.object({
          s3_bucket_name: z.string(),
          s3_key_name: z.string().optional(),
        }).optional(),
      }).optional(),
      matching_rules: z.object({
        rule: z.string().array(),
      }).array().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/customerprofiles_domain

export function AwsCustomerprofilesDomain(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_customerprofiles_domain'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCustomerprofilesDomain = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCustomerprofilesDomain,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCustomerprofilesDomains = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCustomerprofilesDomain,
    idFilter,
    baseNode,
    optional,
  )
