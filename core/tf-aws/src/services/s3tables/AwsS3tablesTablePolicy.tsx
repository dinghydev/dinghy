import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3tables_table_policy

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  namespace: resolvableValue(z.string()),
  resource_policy: resolvableValue(z.string()),
  table_bucket_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsS3tablesTablePolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3tables_table_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3tablesTablePolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsS3tablesTablePolicy, node, id)

export const useAwsS3tablesTablePolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsS3tablesTablePolicy, node, id)
