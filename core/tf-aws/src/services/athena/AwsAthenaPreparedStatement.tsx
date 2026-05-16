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

export const AwsAthenaPreparedStatementInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  query_statement: resolvableValue(z.string()),
  workgroup: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsAthenaPreparedStatementOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsAthenaPreparedStatementInputProps =
  & z.input<typeof AwsAthenaPreparedStatementInputSchema>
  & NodeProps

export type AwsAthenaPreparedStatementOutputProps =
  & z.output<typeof AwsAthenaPreparedStatementOutputSchema>
  & z.output<typeof AwsAthenaPreparedStatementInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/athena_prepared_statement

export function AwsAthenaPreparedStatement(
  props: Partial<AwsAthenaPreparedStatementInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_athena_prepared_statement'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAthenaPreparedStatementInputSchema}
      _outputSchema={AwsAthenaPreparedStatementOutputSchema}
      {...props}
    />
  )
}

export const useAwsAthenaPreparedStatement = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAthenaPreparedStatementOutputProps>(
    AwsAthenaPreparedStatement,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAthenaPreparedStatements = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAthenaPreparedStatementOutputProps>(
    AwsAthenaPreparedStatement,
    idFilter,
    baseNode,
    optional,
  )
