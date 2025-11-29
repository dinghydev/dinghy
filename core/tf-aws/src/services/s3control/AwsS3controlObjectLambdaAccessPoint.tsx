import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3control_object_lambda_access_point

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  configuration: resolvableValue(z.object({
    allowed_features: z.string().array().optional(),
    cloud_watch_metrics_enabled: z.boolean().optional(),
    supporting_access_point: z.string(),
  })),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  alias: z.string().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsS3controlObjectLambdaAccessPoint(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3control_object_lambda_access_point'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3controlObjectLambdaAccessPoint = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsS3controlObjectLambdaAccessPoint, node, id)

export const useAwsS3controlObjectLambdaAccessPoints = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsS3controlObjectLambdaAccessPoint, node, id)
