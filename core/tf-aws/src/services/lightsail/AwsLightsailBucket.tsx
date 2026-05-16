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

export const AwsLightsailBucketInputSchema = TfMetaSchema.extend({
  bundle_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  force_delete: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsLightsailBucketOutputSchema = z.object({
  arn: z.string().optional(),
  availability_zone: z.string().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  support_code: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  url: z.string().optional(),
})

export type AwsLightsailBucketInputProps =
  & z.input<typeof AwsLightsailBucketInputSchema>
  & NodeProps

export type AwsLightsailBucketOutputProps =
  & z.output<typeof AwsLightsailBucketOutputSchema>
  & z.output<typeof AwsLightsailBucketInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lightsail_bucket

export function AwsLightsailBucket(
  props: Partial<AwsLightsailBucketInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_bucket'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLightsailBucketInputSchema}
      _outputSchema={AwsLightsailBucketOutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailBucket = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLightsailBucketOutputProps>(
    AwsLightsailBucket,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLightsailBuckets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLightsailBucketOutputProps>(
    AwsLightsailBucket,
    idFilter,
    baseNode,
    optional,
  )
