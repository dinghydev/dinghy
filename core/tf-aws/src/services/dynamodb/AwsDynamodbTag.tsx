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

export const AwsDynamodbTagInputSchema = TfMetaSchema.extend({
  __key: resolvableValue(z.string()),
  resource_arn: resolvableValue(z.string()),
  value: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsDynamodbTagOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsDynamodbTagInputProps =
  & z.input<typeof AwsDynamodbTagInputSchema>
  & NodeProps

export type AwsDynamodbTagOutputProps =
  & z.output<typeof AwsDynamodbTagOutputSchema>
  & z.output<typeof AwsDynamodbTagInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dynamodb_tag

export function AwsDynamodbTag(props: Partial<AwsDynamodbTagInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dynamodb_tag'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDynamodbTagInputSchema}
      _outputSchema={AwsDynamodbTagOutputSchema}
      {...props}
    />
  )
}

export const useAwsDynamodbTag = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDynamodbTagOutputProps>(
    AwsDynamodbTag,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDynamodbTags = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDynamodbTagOutputProps>(
    AwsDynamodbTag,
    idFilter,
    baseNode,
    optional,
  )
