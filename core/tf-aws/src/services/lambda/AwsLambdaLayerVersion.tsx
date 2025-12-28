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

export const InputSchema = z.object({
  layer_name: resolvableValue(z.string()),
  compatible_architectures: resolvableValue(z.string().array().optional()),
  compatible_runtimes: resolvableValue(z.string().array().optional()),
  description: resolvableValue(z.string().optional()),
  filename: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  license_info: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  s3_bucket: resolvableValue(z.string().optional()),
  s3_key: resolvableValue(z.string().optional()),
  s3_object_version: resolvableValue(z.string().optional()),
  skip_destroy: resolvableValue(z.boolean().optional()),
  source_code_hash: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  code_sha256: z.string().optional(),
  created_date: z.string().optional(),
  layer_arn: z.string().optional(),
  signing_job_arn: z.string().optional(),
  signing_profile_version_arn: z.string().optional(),
  source_code_size: z.number().optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lambda_layer_version

export function AwsLambdaLayerVersion(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lambda_layer_version'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLambdaLayerVersion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsLambdaLayerVersion, idFilter, baseNode, optional)

export const useAwsLambdaLayerVersions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsLambdaLayerVersion,
    idFilter,
    baseNode,
    optional,
  )
