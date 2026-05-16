import {
  camelCaseToWords,
  extendStyle,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { POLICY } from '@dinghy/diagrams/entitiesAws18IotResources'

export const AwsS3BucketPolicyInputSchema = TfMetaSchema.extend({
  bucket: resolvableValue(z.string()),
  policy: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsS3BucketPolicyOutputSchema = z.object({})

export const AwsS3BucketPolicyImportSchema = z.object({
  bucket: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsS3BucketPolicyInputProps =
  & z.input<typeof AwsS3BucketPolicyInputSchema>
  & z.input<typeof AwsS3BucketPolicyImportSchema>
  & NodeProps

export type AwsS3BucketPolicyOutputProps =
  & z.output<typeof AwsS3BucketPolicyOutputSchema>
  & z.output<typeof AwsS3BucketPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3_bucket_policy

export function AwsS3BucketPolicy(props: Partial<AwsS3BucketPolicyInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3BucketPolicyInputSchema}
      _outputSchema={AwsS3BucketPolicyOutputSchema}
      _importSchema={AwsS3BucketPolicyImportSchema}
      {...props}
      _style={extendStyle(props, POLICY)}
    />
  )
}

export const useAwsS3BucketPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3BucketPolicyOutputProps>(
    AwsS3BucketPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3BucketPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3BucketPolicyOutputProps>(
    AwsS3BucketPolicy,
    idFilter,
    baseNode,
    optional,
  )
