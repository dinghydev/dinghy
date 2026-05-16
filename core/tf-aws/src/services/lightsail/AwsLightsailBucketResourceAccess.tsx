import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsLightsailBucketResourceAccessInputSchema = TfMetaSchema.extend({
  bucket_name: resolvableValue(z.string()),
  resource_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsLightsailBucketResourceAccessOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsLightsailBucketResourceAccessInputProps =
  & z.input<typeof AwsLightsailBucketResourceAccessInputSchema>
  & NodeProps

export type AwsLightsailBucketResourceAccessOutputProps =
  & z.output<typeof AwsLightsailBucketResourceAccessOutputSchema>
  & z.output<typeof AwsLightsailBucketResourceAccessInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lightsail_bucket_resource_access

export function AwsLightsailBucketResourceAccess(
  props: Partial<AwsLightsailBucketResourceAccessInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_bucket_resource_access'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLightsailBucketResourceAccessInputSchema}
      _outputSchema={AwsLightsailBucketResourceAccessOutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailBucketResourceAccesss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLightsailBucketResourceAccessOutputProps>(
    AwsLightsailBucketResourceAccess,
    idFilter,
    baseNode,
    optional,
  )
