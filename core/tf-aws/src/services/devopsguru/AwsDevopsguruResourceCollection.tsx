import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/devopsguru_resource_collection

export const InputSchema = z.object({
  type: resolvableValue(z.string()),
  cloudformation: resolvableValue(
    z.object({
      stack_names: z.string().array(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(
    z.object({
      app_boundary_key: z.string(),
      tag_values: z.string().array(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDevopsguruResourceCollection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_devopsguru_resource_collection'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDevopsguruResourceCollection = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDevopsguruResourceCollection, node, id)

export const useAwsDevopsguruResourceCollections = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDevopsguruResourceCollection, node, id)
