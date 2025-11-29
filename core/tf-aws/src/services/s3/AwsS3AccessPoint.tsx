import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3_access_point

export const InputSchema = z.object({
  bucket: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  bucket_account_id: resolvableValue(z.string().optional()),
  policy: resolvableValue(z.string().optional()),
  public_access_block_configuration: resolvableValue(
    z.object({
      block_public_acls: z.boolean().optional(),
      block_public_policy: z.boolean().optional(),
      ignore_public_acls: z.boolean().optional(),
      restrict_public_buckets: z.boolean().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  vpc_configuration: resolvableValue(
    z.object({
      vpc_id: z.string(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  alias: z.string().optional(),
  arn: z.string().optional(),
  domain_name: z.string().optional(),
  endpoints: z.record(z.string(), z.string()).optional(),
  has_public_access_policy: z.boolean().optional(),
  id: z.string().optional(),
  network_origin: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsS3AccessPoint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_access_point'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3AccessPoint = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsS3AccessPoint, node, id)

export const useAwsS3AccessPoints = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsS3AccessPoint, node, id)
