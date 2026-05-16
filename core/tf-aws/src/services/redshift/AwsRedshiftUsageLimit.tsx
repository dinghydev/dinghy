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

export const AwsRedshiftUsageLimitInputSchema = TfMetaSchema.extend({
  amount: resolvableValue(z.number()),
  cluster_identifier: resolvableValue(z.string()),
  feature_type: resolvableValue(z.string()),
  limit_type: resolvableValue(z.string()),
  breach_action: resolvableValue(z.string().optional()),
  period: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsRedshiftUsageLimitOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRedshiftUsageLimitInputProps =
  & z.input<typeof AwsRedshiftUsageLimitInputSchema>
  & NodeProps

export type AwsRedshiftUsageLimitOutputProps =
  & z.output<typeof AwsRedshiftUsageLimitOutputSchema>
  & z.output<typeof AwsRedshiftUsageLimitInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit

export function AwsRedshiftUsageLimit(
  props: Partial<AwsRedshiftUsageLimitInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_usage_limit'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftUsageLimitInputSchema}
      _outputSchema={AwsRedshiftUsageLimitOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftUsageLimit = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftUsageLimitOutputProps>(
    AwsRedshiftUsageLimit,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftUsageLimits = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftUsageLimitOutputProps>(
    AwsRedshiftUsageLimit,
    idFilter,
    baseNode,
    optional,
  )
