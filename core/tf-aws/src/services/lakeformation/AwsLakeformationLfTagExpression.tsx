import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lakeformation_lf_tag_expression

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  catalog_id: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  expression: resolvableValue(
    z.object({
      tag_key: z.string(),
      tag_values: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLakeformationLfTagExpression(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lakeformation_lf_tag_expression'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLakeformationLfTagExpression = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLakeformationLfTagExpression, node, id)

export const useAwsLakeformationLfTagExpressions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLakeformationLfTagExpression, node, id)
