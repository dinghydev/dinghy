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

export const AwsS3AccessPointInputSchema = TfMetaSchema.extend({
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

export const AwsS3AccessPointOutputSchema = z.object({
  alias: z.string().optional(),
  arn: z.string().optional(),
  domain_name: z.string().optional(),
  endpoints: z.record(z.string(), z.string()).optional(),
  has_public_access_policy: z.boolean().optional(),
  id: z.string().optional(),
  network_origin: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsS3AccessPointInputProps =
  & z.input<typeof AwsS3AccessPointInputSchema>
  & NodeProps

export type AwsS3AccessPointOutputProps =
  & z.output<typeof AwsS3AccessPointOutputSchema>
  & z.output<typeof AwsS3AccessPointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3_access_point

export function AwsS3AccessPoint(props: Partial<AwsS3AccessPointInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_access_point'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3AccessPointInputSchema}
      _outputSchema={AwsS3AccessPointOutputSchema}
      {...props}
    />
  )
}

export const useAwsS3AccessPoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3AccessPointOutputProps>(
    AwsS3AccessPoint,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3AccessPoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3AccessPointOutputProps>(
    AwsS3AccessPoint,
    idFilter,
    baseNode,
    optional,
  )
