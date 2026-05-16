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

export const AwsEvidentlyFeatureInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  project: resolvableValue(z.string()),
  variations: resolvableValue(
    z.object({
      name: z.string(),
      value: z.object({
        bool_value: z.string().optional(),
        double_value: z.string().optional(),
        long_value: z.string().optional(),
        string_value: z.string().optional(),
      }),
    }).array(),
  ),
  default_variation: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  entity_overrides: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  evaluation_strategy: resolvableValue(z.string().optional()),
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

export const AwsEvidentlyFeatureOutputSchema = z.object({
  arn: z.string().optional(),
  created_time: z.string().optional(),
  evaluation_rules: z.set(z.object({
    name: z.string(),
    type: z.string(),
  })).optional(),
  id: z.string().optional(),
  last_updated_time: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  value_type: z.string().optional(),
})

export type AwsEvidentlyFeatureInputProps =
  & z.input<typeof AwsEvidentlyFeatureInputSchema>
  & NodeProps

export type AwsEvidentlyFeatureOutputProps =
  & z.output<typeof AwsEvidentlyFeatureOutputSchema>
  & z.output<typeof AwsEvidentlyFeatureInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/evidently_feature

export function AwsEvidentlyFeature(
  props: Partial<AwsEvidentlyFeatureInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_evidently_feature'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEvidentlyFeatureInputSchema}
      _outputSchema={AwsEvidentlyFeatureOutputSchema}
      {...props}
    />
  )
}

export const useAwsEvidentlyFeature = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEvidentlyFeatureOutputProps>(
    AwsEvidentlyFeature,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEvidentlyFeatures = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEvidentlyFeatureOutputProps>(
    AwsEvidentlyFeature,
    idFilter,
    baseNode,
    optional,
  )
