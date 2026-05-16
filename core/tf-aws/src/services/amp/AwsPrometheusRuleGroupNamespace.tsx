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

export const AwsPrometheusRuleGroupNamespaceInputSchema = TfMetaSchema.extend({
  data: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  workspace_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsPrometheusRuleGroupNamespaceOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsPrometheusRuleGroupNamespaceImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsPrometheusRuleGroupNamespaceInputProps =
  & z.input<typeof AwsPrometheusRuleGroupNamespaceInputSchema>
  & z.input<typeof AwsPrometheusRuleGroupNamespaceImportSchema>
  & NodeProps

export type AwsPrometheusRuleGroupNamespaceOutputProps =
  & z.output<typeof AwsPrometheusRuleGroupNamespaceOutputSchema>
  & z.output<typeof AwsPrometheusRuleGroupNamespaceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_rule_group_namespace

export function AwsPrometheusRuleGroupNamespace(
  props: Partial<AwsPrometheusRuleGroupNamespaceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_prometheus_rule_group_namespace'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPrometheusRuleGroupNamespaceInputSchema}
      _outputSchema={AwsPrometheusRuleGroupNamespaceOutputSchema}
      _importSchema={AwsPrometheusRuleGroupNamespaceImportSchema}
      {...props}
    />
  )
}

export const useAwsPrometheusRuleGroupNamespace = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsPrometheusRuleGroupNamespaceOutputProps>(
    AwsPrometheusRuleGroupNamespace,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPrometheusRuleGroupNamespaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPrometheusRuleGroupNamespaceOutputProps>(
    AwsPrometheusRuleGroupNamespace,
    idFilter,
    baseNode,
    optional,
  )
