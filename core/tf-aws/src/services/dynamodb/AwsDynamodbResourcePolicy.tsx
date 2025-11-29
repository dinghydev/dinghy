import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dynamodb_resource_policy

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  policy: resolvableValue(z.string()),
  resource_arn: resolvableValue(z.string()),
  confirm_remove_self_resource_access: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  revision_id: z.string().optional(),
})

export const ImportSchema = z.object({
  resource_arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDynamodbResourcePolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dynamodb_resource_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsDynamodbResourcePolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDynamodbResourcePolicy, node, id)

export const useAwsDynamodbResourcePolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDynamodbResourcePolicy, node, id)
