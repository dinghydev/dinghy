import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/elastictranscoder_pipeline

export const InputSchema = z.object({
  input_bucket: resolvableValue(z.string()),
  role: resolvableValue(z.string()),
  aws_kms_key_arn: resolvableValue(z.string().optional()),
  content_config: resolvableValue(
    z.object({
      bucket: z.string().optional(),
      storage_class: z.string().optional(),
    }).optional(),
  ),
  content_config_permissions: resolvableValue(
    z.object({
      access: z.string().array().optional(),
      grantee: z.string().optional(),
      grantee_type: z.string().optional(),
    }).array().optional(),
  ),
  name: resolvableValue(z.string().optional()),
  notifications: resolvableValue(
    z.object({
      completed: z.string().optional(),
      error: z.string().optional(),
      progressing: z.string().optional(),
      warning: z.string().optional(),
    }).optional(),
  ),
  output_bucket: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  thumbnail_config: resolvableValue(
    z.object({
      bucket: z.string().optional(),
      storage_class: z.string().optional(),
    }).optional(),
  ),
  thumbnail_config_permissions: resolvableValue(
    z.object({
      access: z.string().array().optional(),
      grantee: z.string().optional(),
      grantee_type: z.string().optional(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsElastictranscoderPipeline(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elastictranscoder_pipeline'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsElastictranscoderPipeline = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsElastictranscoderPipeline, node, id)

export const useAwsElastictranscoderPipelines = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsElastictranscoderPipeline, node, id)
