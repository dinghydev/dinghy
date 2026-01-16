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

export const InputSchema = TfMetaSchema.extend({
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_resource_policy

export function AwsDynamodbResourcePolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsDynamodbResourcePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsDynamodbResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDynamodbResourcePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsDynamodbResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )
