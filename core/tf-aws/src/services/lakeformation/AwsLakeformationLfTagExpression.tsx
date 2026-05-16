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

export const AwsLakeformationLfTagExpressionInputSchema = TfMetaSchema.extend({
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

export const AwsLakeformationLfTagExpressionOutputSchema = z.object({})

export type AwsLakeformationLfTagExpressionInputProps =
  & z.input<typeof AwsLakeformationLfTagExpressionInputSchema>
  & NodeProps

export type AwsLakeformationLfTagExpressionOutputProps =
  & z.output<typeof AwsLakeformationLfTagExpressionOutputSchema>
  & z.output<typeof AwsLakeformationLfTagExpressionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lakeformation_lf_tag_expression

export function AwsLakeformationLfTagExpression(
  props: Partial<AwsLakeformationLfTagExpressionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lakeformation_lf_tag_expression'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLakeformationLfTagExpressionInputSchema}
      _outputSchema={AwsLakeformationLfTagExpressionOutputSchema}
      {...props}
    />
  )
}

export const useAwsLakeformationLfTagExpression = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLakeformationLfTagExpressionOutputProps>(
    AwsLakeformationLfTagExpression,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLakeformationLfTagExpressions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLakeformationLfTagExpressionOutputProps>(
    AwsLakeformationLfTagExpression,
    idFilter,
    baseNode,
    optional,
  )
