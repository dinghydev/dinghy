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

export const AwsS3tablesTablePolicyInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  namespace: resolvableValue(z.string()),
  resource_policy: resolvableValue(z.string()),
  table_bucket_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsS3tablesTablePolicyOutputSchema = z.object({})

export type AwsS3tablesTablePolicyInputProps =
  & z.input<typeof AwsS3tablesTablePolicyInputSchema>
  & NodeProps

export type AwsS3tablesTablePolicyOutputProps =
  & z.output<typeof AwsS3tablesTablePolicyOutputSchema>
  & z.output<typeof AwsS3tablesTablePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3tables_table_policy

export function AwsS3tablesTablePolicy(
  props: Partial<AwsS3tablesTablePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3tables_table_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3tablesTablePolicyInputSchema}
      _outputSchema={AwsS3tablesTablePolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsS3tablesTablePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3tablesTablePolicyOutputProps>(
    AwsS3tablesTablePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3tablesTablePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3tablesTablePolicyOutputProps>(
    AwsS3tablesTablePolicy,
    idFilter,
    baseNode,
    optional,
  )
