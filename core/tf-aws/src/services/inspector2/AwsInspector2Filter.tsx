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
  action: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  description: resolvableValue(z.string().optional()),
  filter_criteria: resolvableValue(
    z.object({
      aws_account_id: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      code_repository_project_name: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      code_repository_provider_type: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      code_vulnerability_detector_name: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      code_vulnerability_detector_tags: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      code_vulnerability_file_path: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      component_id: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      component_type: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      ec2_instance_image_id: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      ec2_instance_subnet_id: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      ec2_instance_vpc_id: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      ecr_image_architecture: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      ecr_image_hash: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      ecr_image_in_use_count: z.object({
        lower_inclusive: z.number(),
        upper_inclusive: z.number(),
      }).array().optional(),
      ecr_image_last_in_use_at: z.object({
        end_inclusive: z.string().optional(),
        start_inclusive: z.string().optional(),
      }).array().optional(),
      ecr_image_pushed_at: z.object({
        end_inclusive: z.string().optional(),
        start_inclusive: z.string().optional(),
      }).array().optional(),
      ecr_image_registry: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      ecr_image_repository_name: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      ecr_image_tags: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      epss_score: z.object({
        lower_inclusive: z.number(),
        upper_inclusive: z.number(),
      }).array().optional(),
      exploit_available: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      finding_arn: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      finding_status: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      finding_type: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      first_observed_at: z.object({
        end_inclusive: z.string().optional(),
        start_inclusive: z.string().optional(),
      }).array().optional(),
      fix_available: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      inspector_score: z.object({
        lower_inclusive: z.number(),
        upper_inclusive: z.number(),
      }).array().optional(),
      lambda_function_execution_role_arn: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      lambda_function_last_modified_at: z.object({
        end_inclusive: z.string().optional(),
        start_inclusive: z.string().optional(),
      }).array().optional(),
      lambda_function_layers: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      lambda_function_name: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      lambda_function_runtime: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      last_observed_at: z.object({
        end_inclusive: z.string().optional(),
        start_inclusive: z.string().optional(),
      }).array().optional(),
      network_protocol: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      port_range: z.object({
        begin_inclusive: z.number(),
        end_inclusive: z.number(),
      }).array().optional(),
      related_vulnerabilities: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      resource_id: z.object({
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
      severity: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      title: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      updated_at: z.object({
        end_inclusive: z.string().optional(),
        start_inclusive: z.string().optional(),
      }).array().optional(),
      vendor_severity: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      vulnerability_id: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      vulnerability_source: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      vulnerable_packages: z.object({
        architecture: z.object({
          comparison: z.string(),
          value: z.string(),
        }).array().optional(),
        epoch: z.object({
          lower_inclusive: z.number(),
          upper_inclusive: z.number(),
        }).array().optional(),
        file_path: z.object({
          comparison: z.string(),
          value: z.string(),
        }).array().optional(),
        name: z.object({
          comparison: z.string(),
          value: z.string(),
        }).array().optional(),
        release: z.object({
          comparison: z.string(),
          value: z.string(),
        }).array().optional(),
        source_lambda_layer_arn: z.object({
          comparison: z.string(),
          value: z.string(),
        }).array().optional(),
        source_layer_hash: z.object({
          comparison: z.string(),
          value: z.string(),
        }).array().optional(),
        version: z.object({
          comparison: z.string(),
          value: z.string(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  reason: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/inspector2_filter

export function AwsInspector2Filter(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_inspector2_filter'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsInspector2Filter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsInspector2Filter, idFilter, baseNode, optional)

export const useAwsInspector2Filters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsInspector2Filter, idFilter, baseNode, optional)
