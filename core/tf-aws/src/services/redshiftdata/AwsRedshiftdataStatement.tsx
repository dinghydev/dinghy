import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/redshiftdata_statement

export const InputSchema = z.object({
  database: resolvableValue(z.string()),
  sql: resolvableValue(z.string()),
  cluster_identifier: resolvableValue(z.string().optional()),
  db_user: resolvableValue(z.string().optional()),
  parameters: resolvableValue(
    z.object({
      name: z.string(),
      value: z.string(),
    }).optional(),
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

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRedshiftdataStatement(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshiftdata_statement'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftdataStatement = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRedshiftdataStatement, node, id)

export const useAwsRedshiftdataStatements = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRedshiftdataStatement, node, id)
