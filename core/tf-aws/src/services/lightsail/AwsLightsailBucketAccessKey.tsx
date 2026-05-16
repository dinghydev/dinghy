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

export const AwsLightsailBucketAccessKeyInputSchema = TfMetaSchema.extend({
  bucket_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsLightsailBucketAccessKeyOutputSchema = z.object({
  access_key_id: z.string().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  secret_access_key: z.string().optional(),
  status: z.string().optional(),
})

export type AwsLightsailBucketAccessKeyInputProps =
  & z.input<typeof AwsLightsailBucketAccessKeyInputSchema>
  & NodeProps

export type AwsLightsailBucketAccessKeyOutputProps =
  & z.output<typeof AwsLightsailBucketAccessKeyOutputSchema>
  & z.output<typeof AwsLightsailBucketAccessKeyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lightsail_bucket_access_key

export function AwsLightsailBucketAccessKey(
  props: Partial<AwsLightsailBucketAccessKeyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_bucket_access_key'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLightsailBucketAccessKeyInputSchema}
      _outputSchema={AwsLightsailBucketAccessKeyOutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailBucketAccessKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLightsailBucketAccessKeyOutputProps>(
    AwsLightsailBucketAccessKey,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLightsailBucketAccessKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLightsailBucketAccessKeyOutputProps>(
    AwsLightsailBucketAccessKey,
    idFilter,
    baseNode,
    optional,
  )
