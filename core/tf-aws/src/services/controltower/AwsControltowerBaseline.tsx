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

export const AwsControltowerBaselineInputSchema = TfMetaSchema.extend({
  baseline_identifier: resolvableValue(z.string()),
  baseline_version: resolvableValue(z.string()),
  target_identifier: resolvableValue(z.string()),
  parameters: resolvableValue(
    z.object({
      key: z.string(),
      value: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsControltowerBaselineOutputSchema = z.object({
  arn: z.string().optional(),
  operation_identifier: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsControltowerBaselineInputProps =
  & z.input<typeof AwsControltowerBaselineInputSchema>
  & NodeProps

export type AwsControltowerBaselineOutputProps =
  & z.output<typeof AwsControltowerBaselineOutputSchema>
  & z.output<typeof AwsControltowerBaselineInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/controltower_baseline

export function AwsControltowerBaseline(
  props: Partial<AwsControltowerBaselineInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_controltower_baseline'
      _category='resource'
      _title={_title}
      _inputSchema={AwsControltowerBaselineInputSchema}
      _outputSchema={AwsControltowerBaselineOutputSchema}
      {...props}
    />
  )
}

export const useAwsControltowerBaseline = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsControltowerBaselineOutputProps>(
    AwsControltowerBaseline,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsControltowerBaselines = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsControltowerBaselineOutputProps>(
    AwsControltowerBaseline,
    idFilter,
    baseNode,
    optional,
  )
