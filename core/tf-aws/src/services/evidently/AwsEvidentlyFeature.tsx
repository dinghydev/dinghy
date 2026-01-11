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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/evidently_feature

export function AwsEvidentlyFeature(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_evidently_feature'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEvidentlyFeature = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsEvidentlyFeature, idFilter, baseNode, optional)

export const useAwsEvidentlyFeatures = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsEvidentlyFeature, idFilter, baseNode, optional)
