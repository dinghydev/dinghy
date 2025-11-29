import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/servicecatalog_service_action

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  accept_language: resolvableValue(z.string().optional()),
  definition: resolvableValue(z.object({
    assume_role: z.string().optional(),
    name: z.string(),
    parameters: z.string().optional(),
    type: z.string().optional(),
    version: z.string(),
  })),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      read: z.string().optional(),
      update: z.string().optional(),
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

export function AwsServicecatalogServiceAction(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalog_service_action'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsServicecatalogServiceAction = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsServicecatalogServiceAction, node, id)

export const useAwsServicecatalogServiceActions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsServicecatalogServiceAction, node, id)
