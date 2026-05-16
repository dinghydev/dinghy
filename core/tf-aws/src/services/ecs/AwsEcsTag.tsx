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

export const AwsEcsTagInputSchema = TfMetaSchema.extend({
  __key: resolvableValue(z.string()),
  resource_arn: resolvableValue(z.string()),
  value: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEcsTagOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsEcsTagInputProps =
  & z.input<typeof AwsEcsTagInputSchema>
  & NodeProps

export type AwsEcsTagOutputProps =
  & z.output<typeof AwsEcsTagOutputSchema>
  & z.output<typeof AwsEcsTagInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ecs_tag

export function AwsEcsTag(props: Partial<AwsEcsTagInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecs_tag'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEcsTagInputSchema}
      _outputSchema={AwsEcsTagOutputSchema}
      {...props}
    />
  )
}

export const useAwsEcsTag = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<AwsEcsTagOutputProps>(AwsEcsTag, idFilter, baseNode, optional)

export const useAwsEcsTags = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEcsTagOutputProps>(AwsEcsTag, idFilter, baseNode, optional)
