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

export const AwsKinesisResourcePolicyInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  resource_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsKinesisResourcePolicyOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsKinesisResourcePolicyImportSchema = z.object({
  resource_arn: resolvableValue(z.string()),
})

export type AwsKinesisResourcePolicyInputProps =
  & z.input<typeof AwsKinesisResourcePolicyInputSchema>
  & z.input<typeof AwsKinesisResourcePolicyImportSchema>
  & NodeProps

export type AwsKinesisResourcePolicyOutputProps =
  & z.output<typeof AwsKinesisResourcePolicyOutputSchema>
  & z.output<typeof AwsKinesisResourcePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/kinesis_resource_policy

export function AwsKinesisResourcePolicy(
  props: Partial<AwsKinesisResourcePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kinesis_resource_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsKinesisResourcePolicyInputSchema}
      _outputSchema={AwsKinesisResourcePolicyOutputSchema}
      _importSchema={AwsKinesisResourcePolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsKinesisResourcePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsKinesisResourcePolicyOutputProps>(
    AwsKinesisResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsKinesisResourcePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsKinesisResourcePolicyOutputProps>(
    AwsKinesisResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )
