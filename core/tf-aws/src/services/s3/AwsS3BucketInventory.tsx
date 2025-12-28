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
  bucket: resolvableValue(z.string()),
  destination: resolvableValue(z.object({
    bucket: z.object({
      account_id: z.string().optional(),
      bucket_arn: z.string(),
      format: z.string(),
      prefix: z.string().optional(),
      encryption: z.object({
        sse_kms: z.object({
          key_id: z.string(),
        }).optional(),
        sse_s3: z.object({}).optional(),
      }).optional(),
    }),
  })),
  included_object_versions: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  schedule: resolvableValue(z.object({
    frequency: z.string(),
  })),
  enabled: resolvableValue(z.boolean().optional()),
  filter: resolvableValue(
    z.object({
      prefix: z.string().optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  optional_fields: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3_bucket_inventory

export function AwsS3BucketInventory(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_inventory'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketInventory = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsS3BucketInventory, idFilter, baseNode, optional)

export const useAwsS3BucketInventorys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsS3BucketInventory, idFilter, baseNode, optional)
