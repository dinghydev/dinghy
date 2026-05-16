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

export const AwsRedshiftdataStatementInputSchema = TfMetaSchema.extend({
  database: resolvableValue(z.string()),
  sql: resolvableValue(z.string()),
  cluster_identifier: resolvableValue(z.string().optional()),
  db_user: resolvableValue(z.string().optional()),
  parameters: resolvableValue(
    z.object({
      name: z.string(),
      value: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  secret_arn: resolvableValue(z.string().optional()),
  statement_name: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
  with_event: resolvableValue(z.boolean().optional()),
  workgroup_name: resolvableValue(z.string().optional()),
})

export const AwsRedshiftdataStatementOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsRedshiftdataStatementInputProps =
  & z.input<typeof AwsRedshiftdataStatementInputSchema>
  & NodeProps

export type AwsRedshiftdataStatementOutputProps =
  & z.output<typeof AwsRedshiftdataStatementOutputSchema>
  & z.output<typeof AwsRedshiftdataStatementInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement

export function AwsRedshiftdataStatement(
  props: Partial<AwsRedshiftdataStatementInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshiftdata_statement'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftdataStatementInputSchema}
      _outputSchema={AwsRedshiftdataStatementOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftdataStatement = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftdataStatementOutputProps>(
    AwsRedshiftdataStatement,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftdataStatements = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftdataStatementOutputProps>(
    AwsRedshiftdataStatement,
    idFilter,
    baseNode,
    optional,
  )
