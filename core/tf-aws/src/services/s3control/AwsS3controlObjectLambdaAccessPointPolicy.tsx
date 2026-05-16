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

export const AwsS3controlObjectLambdaAccessPointPolicyInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    policy: resolvableValue(z.string()),
    account_id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsS3controlObjectLambdaAccessPointPolicyOutputSchema = z.object({
  has_public_access_policy: z.boolean().optional(),
  id: z.string().optional(),
})

export type AwsS3controlObjectLambdaAccessPointPolicyInputProps =
  & z.input<typeof AwsS3controlObjectLambdaAccessPointPolicyInputSchema>
  & NodeProps

export type AwsS3controlObjectLambdaAccessPointPolicyOutputProps =
  & z.output<typeof AwsS3controlObjectLambdaAccessPointPolicyOutputSchema>
  & z.output<typeof AwsS3controlObjectLambdaAccessPointPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3control_object_lambda_access_point_policy

export function AwsS3controlObjectLambdaAccessPointPolicy(
  props: Partial<AwsS3controlObjectLambdaAccessPointPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3control_object_lambda_access_point_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3controlObjectLambdaAccessPointPolicyInputSchema}
      _outputSchema={AwsS3controlObjectLambdaAccessPointPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsS3controlObjectLambdaAccessPointPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3controlObjectLambdaAccessPointPolicyOutputProps>(
    AwsS3controlObjectLambdaAccessPointPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3controlObjectLambdaAccessPointPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3controlObjectLambdaAccessPointPolicyOutputProps>(
    AwsS3controlObjectLambdaAccessPointPolicy,
    idFilter,
    baseNode,
    optional,
  )
