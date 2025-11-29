import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lightsail_bucket_access_key

export const InputSchema = z.object({
  bucket_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  access_key_id: z.string().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  secret_access_key: z.string().optional(),
  status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLightsailBucketAccessKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_bucket_access_key'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailBucketAccessKey = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLightsailBucketAccessKey, node, id)

export const useAwsLightsailBucketAccessKeys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLightsailBucketAccessKey, node, id)
