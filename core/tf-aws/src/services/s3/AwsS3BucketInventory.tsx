import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3_bucket_inventory

export const InputSchema = z.object({
  bucket: resolvableValue(z.string()),
  included_object_versions: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  schedule: resolvableValue(z.object({
    frequency: z.string(),
  })),
  destination: resolvableValue(z.object({
    bucket: z.object({
      account_id: z.string().optional(),
      bucket_arn: z.string(),
      format: z.string(),
      prefix: z.string().optional(),
    }),
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
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsS3BucketInventory(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsS3BucketInventory = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsS3BucketInventory, node, id)

export const useAwsS3BucketInventorys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsS3BucketInventory, node, id)
