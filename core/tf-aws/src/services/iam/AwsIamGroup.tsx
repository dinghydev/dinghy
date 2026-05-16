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

export const AwsIamGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  path: resolvableValue(z.string().optional()),
})

export const AwsIamGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  path: z.string().optional(),
  unique_id: z.string().optional(),
})

export type AwsIamGroupInputProps =
  & z.input<typeof AwsIamGroupInputSchema>
  & NodeProps

export type AwsIamGroupOutputProps =
  & z.output<typeof AwsIamGroupOutputSchema>
  & z.output<typeof AwsIamGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_group

export function AwsIamGroup(props: Partial<AwsIamGroupInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamGroupInputSchema}
      _outputSchema={AwsIamGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamGroupOutputProps>(
    AwsIamGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamGroupOutputProps>(
    AwsIamGroup,
    idFilter,
    baseNode,
    optional,
  )
