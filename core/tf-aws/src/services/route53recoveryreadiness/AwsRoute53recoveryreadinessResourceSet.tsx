import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/route53recoveryreadiness_resource_set

export const InputSchema = z.object({
  resource_set_name: resolvableValue(z.string()),
  resource_set_type: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  resources: resolvableValue(z.object({
    component_id: z.string(),
    readiness_scopes: z.string().array().optional(),
    resource_arn: z.string().optional(),
  })),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRoute53recoveryreadinessResourceSet(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53recoveryreadiness_resource_set'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53recoveryreadinessResourceSet = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsRoute53recoveryreadinessResourceSet, node, id)

export const useAwsRoute53recoveryreadinessResourceSets = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsRoute53recoveryreadinessResourceSet, node, id)
