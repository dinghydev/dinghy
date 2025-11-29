import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/resourcegroupstaggingapi_resources

export const InputSchema = z.object({
  exclude_compliant_resources: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  include_compliance_details: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  resource_arn_list: resolvableValue(z.string().array().optional()),
  resource_type_filters: resolvableValue(z.string().array().optional()),
  tag_filter: resolvableValue(
    z.object({
      key: z.string(),
      values: z.string().array().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  resource_tag_mapping_list: z.object({
    compliance_details: z.object({
      compliance_status: z.boolean(),
      keys_with_noncompliant_values: z.string().array(),
      non_compliant_keys: z.string().array(),
    }).array(),
    resource_arn: z.string(),
    tags: z.record(z.string(), z.string()),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsResourcegroupstaggingapiResources(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_resourcegroupstaggingapi_resources'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsResourcegroupstaggingapiResourcess = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(DataAwsResourcegroupstaggingapiResources, node, id)
