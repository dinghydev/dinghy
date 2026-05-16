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

export const AwsS3controlObjectLambdaAccessPointInputSchema = TfMetaSchema
  .extend({
    configuration: resolvableValue(z.object({
      allowed_features: z.string().array().optional(),
      cloud_watch_metrics_enabled: z.boolean().optional(),
      supporting_access_point: z.string(),
      transformation_configuration: z.object({
        actions: z.string().array(),
        content_transformation: z.object({
          aws_lambda: z.object({
            function_arn: z.string(),
            function_payload: z.string().optional(),
          }),
        }),
      }).array(),
    })),
    name: resolvableValue(z.string()),
    account_id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsS3controlObjectLambdaAccessPointOutputSchema = z.object({
  alias: z.string().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsS3controlObjectLambdaAccessPointInputProps =
  & z.input<typeof AwsS3controlObjectLambdaAccessPointInputSchema>
  & NodeProps

export type AwsS3controlObjectLambdaAccessPointOutputProps =
  & z.output<typeof AwsS3controlObjectLambdaAccessPointOutputSchema>
  & z.output<typeof AwsS3controlObjectLambdaAccessPointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3control_object_lambda_access_point

export function AwsS3controlObjectLambdaAccessPoint(
  props: Partial<AwsS3controlObjectLambdaAccessPointInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3control_object_lambda_access_point'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3controlObjectLambdaAccessPointInputSchema}
      _outputSchema={AwsS3controlObjectLambdaAccessPointOutputSchema}
      {...props}
    />
  )
}

export const useAwsS3controlObjectLambdaAccessPoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3controlObjectLambdaAccessPointOutputProps>(
    AwsS3controlObjectLambdaAccessPoint,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3controlObjectLambdaAccessPoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3controlObjectLambdaAccessPointOutputProps>(
    AwsS3controlObjectLambdaAccessPoint,
    idFilter,
    baseNode,
    optional,
  )
