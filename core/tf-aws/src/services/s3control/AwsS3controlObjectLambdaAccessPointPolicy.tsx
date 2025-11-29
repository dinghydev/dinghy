import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3control_object_lambda_access_point_policy

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  policy: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  has_public_access_policy: z.boolean().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsS3controlObjectLambdaAccessPointPolicy(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3control_object_lambda_access_point_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3controlObjectLambdaAccessPointPolicy = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsS3controlObjectLambdaAccessPointPolicy, node, id)

export const useAwsS3controlObjectLambdaAccessPointPolicys = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsS3controlObjectLambdaAccessPointPolicy,
    node,
    id,
  )
