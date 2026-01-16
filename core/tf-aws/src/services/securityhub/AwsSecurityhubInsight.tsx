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

export const InputSchema = TfMetaSchema.extend({
  filters: resolvableValue(z.object({
    aws_account_id: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    company_name: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    compliance_status: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    confidence: z.object({
      eq: z.string().optional(),
      gte: z.string().optional(),
      lte: z.string().optional(),
    }).array().optional(),
    created_at: z.object({
      end: z.string().optional(),
      start: z.string().optional(),
      date_range: z.object({
        unit: z.string(),
        value: z.number(),
      }).optional(),
    }).array().optional(),
    criticality: z.object({
      eq: z.string().optional(),
      gte: z.string().optional(),
      lte: z.string().optional(),
    }).array().optional(),
    description: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    finding_provider_fields_confidence: z.object({
      eq: z.string().optional(),
      gte: z.string().optional(),
      lte: z.string().optional(),
    }).array().optional(),
    finding_provider_fields_criticality: z.object({
      eq: z.string().optional(),
      gte: z.string().optional(),
      lte: z.string().optional(),
    }).array().optional(),
    finding_provider_fields_related_findings_id: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    finding_provider_fields_related_findings_product_arn: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    finding_provider_fields_severity_label: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    finding_provider_fields_severity_original: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    finding_provider_fields_types: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    first_observed_at: z.object({
      end: z.string().optional(),
      start: z.string().optional(),
      date_range: z.object({
        unit: z.string(),
        value: z.number(),
      }).optional(),
    }).array().optional(),
    generator_id: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    id: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    keyword: z.object({
      value: z.string(),
    }).array().optional(),
    last_observed_at: z.object({
      end: z.string().optional(),
      start: z.string().optional(),
      date_range: z.object({
        unit: z.string(),
        value: z.number(),
      }).optional(),
    }).array().optional(),
    malware_name: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    malware_path: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    malware_state: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    malware_type: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    network_destination_domain: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    network_destination_ipv4: z.object({
      cidr: z.string(),
    }).array().optional(),
    network_destination_ipv6: z.object({
      cidr: z.string(),
    }).array().optional(),
    network_destination_port: z.object({
      eq: z.string().optional(),
      gte: z.string().optional(),
      lte: z.string().optional(),
    }).array().optional(),
    network_direction: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    network_protocol: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    network_source_domain: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    network_source_ipv4: z.object({
      cidr: z.string(),
    }).array().optional(),
    network_source_ipv6: z.object({
      cidr: z.string(),
    }).array().optional(),
    network_source_mac: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    network_source_port: z.object({
      eq: z.string().optional(),
      gte: z.string().optional(),
      lte: z.string().optional(),
    }).array().optional(),
    note_text: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    note_updated_at: z.object({
      end: z.string().optional(),
      start: z.string().optional(),
      date_range: z.object({
        unit: z.string(),
        value: z.number(),
      }).optional(),
    }).array().optional(),
    note_updated_by: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    process_launched_at: z.object({
      end: z.string().optional(),
      start: z.string().optional(),
      date_range: z.object({
        unit: z.string(),
        value: z.number(),
      }).optional(),
    }).array().optional(),
    process_name: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    process_parent_pid: z.object({
      eq: z.string().optional(),
      gte: z.string().optional(),
      lte: z.string().optional(),
    }).array().optional(),
    process_path: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    process_pid: z.object({
      eq: z.string().optional(),
      gte: z.string().optional(),
      lte: z.string().optional(),
    }).array().optional(),
    process_terminated_at: z.object({
      end: z.string().optional(),
      start: z.string().optional(),
      date_range: z.object({
        unit: z.string(),
        value: z.number(),
      }).optional(),
    }).array().optional(),
    product_arn: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    product_fields: z.object({
      comparison: z.string(),
      key: z.string(),
      value: z.string(),
    }).array().optional(),
    product_name: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    recommendation_text: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    record_state: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    related_findings_id: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    related_findings_product_arn: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    resource_aws_ec2_instance_iam_instance_profile_arn: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    resource_aws_ec2_instance_image_id: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    resource_aws_ec2_instance_ipv4_addresses: z.object({
      cidr: z.string(),
    }).array().optional(),
    resource_aws_ec2_instance_ipv6_addresses: z.object({
      cidr: z.string(),
    }).array().optional(),
    resource_aws_ec2_instance_key_name: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    resource_aws_ec2_instance_launched_at: z.object({
      end: z.string().optional(),
      start: z.string().optional(),
      date_range: z.object({
        unit: z.string(),
        value: z.number(),
      }).optional(),
    }).array().optional(),
    resource_aws_ec2_instance_subnet_id: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    resource_aws_ec2_instance_type: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    resource_aws_ec2_instance_vpc_id: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    resource_aws_iam_access_key_created_at: z.object({
      end: z.string().optional(),
      start: z.string().optional(),
      date_range: z.object({
        unit: z.string(),
        value: z.number(),
      }).optional(),
    }).array().optional(),
    resource_aws_iam_access_key_status: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    resource_aws_iam_access_key_user_name: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    resource_aws_s3_bucket_owner_id: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    resource_aws_s3_bucket_owner_name: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    resource_container_image_id: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    resource_container_image_name: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    resource_container_launched_at: z.object({
      end: z.string().optional(),
      start: z.string().optional(),
      date_range: z.object({
        unit: z.string(),
        value: z.number(),
      }).optional(),
    }).array().optional(),
    resource_container_name: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    resource_details_other: z.object({
      comparison: z.string(),
      key: z.string(),
      value: z.string(),
    }).array().optional(),
    resource_id: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    resource_partition: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    resource_region: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    resource_tags: z.object({
      comparison: z.string(),
      key: z.string(),
      value: z.string(),
    }).array().optional(),
    resource_type: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    severity_label: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    source_url: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    threat_intel_indicator_category: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    threat_intel_indicator_last_observed_at: z.object({
      end: z.string().optional(),
      start: z.string().optional(),
      date_range: z.object({
        unit: z.string(),
        value: z.number(),
      }).optional(),
    }).array().optional(),
    threat_intel_indicator_source: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    threat_intel_indicator_source_url: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    threat_intel_indicator_type: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    threat_intel_indicator_value: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    title: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    type: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    updated_at: z.object({
      end: z.string().optional(),
      start: z.string().optional(),
      date_range: z.object({
        unit: z.string(),
        value: z.number(),
      }).optional(),
    }).array().optional(),
    user_defined_values: z.object({
      comparison: z.string(),
      key: z.string(),
      value: z.string(),
    }).array().optional(),
    verification_state: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
    workflow_status: z.object({
      comparison: z.string(),
      value: z.string(),
    }).array().optional(),
  })),
  group_by_attribute: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/securityhub_insight

export function AwsSecurityhubInsight(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_insight'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSecurityhubInsight = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsSecurityhubInsight, idFilter, baseNode, optional)

export const useAwsSecurityhubInsights = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsSecurityhubInsight,
    idFilter,
    baseNode,
    optional,
  )
