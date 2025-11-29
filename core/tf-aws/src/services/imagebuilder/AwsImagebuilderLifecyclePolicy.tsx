import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/imagebuilder_lifecycle_policy

export const InputSchema = z.object({
  execution_role: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  resource_type: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  policy_detail: resolvableValue(
    z.object({
      action: z.object({
        type: z.string(),
      }).optional(),
      exclusion_rules: z.object({
        tag_map: z.record(z.string(), z.string()).optional(),
      }).optional(),
      filter: z.object({
        retain_at_least: z.number().optional(),
        type: z.string(),
        unit: z.string().optional(),
        value: z.number(),
      }).optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  resource_selection: resolvableValue(
    z.object({
      tag_map: z.record(z.string(), z.string()).optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
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

export function AwsImagebuilderLifecyclePolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_imagebuilder_lifecycle_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsImagebuilderLifecyclePolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsImagebuilderLifecyclePolicy, node, id)

export const useAwsImagebuilderLifecyclePolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsImagebuilderLifecyclePolicy, node, id)
