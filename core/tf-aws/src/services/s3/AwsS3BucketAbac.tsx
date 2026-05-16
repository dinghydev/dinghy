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

export const AwsS3BucketAbacInputSchema = TfMetaSchema.extend({
  bucket: resolvableValue(z.string()),
  abac_status: resolvableValue(
    z.object({
      status: z.string(),
    }).array().optional(),
  ),
  expected_bucket_owner: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsS3BucketAbacOutputSchema = z.object({})

export type AwsS3BucketAbacInputProps =
  & z.input<typeof AwsS3BucketAbacInputSchema>
  & NodeProps

export type AwsS3BucketAbacOutputProps =
  & z.output<typeof AwsS3BucketAbacOutputSchema>
  & z.output<typeof AwsS3BucketAbacInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3_bucket_abac

export function AwsS3BucketAbac(props: Partial<AwsS3BucketAbacInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_abac'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3BucketAbacInputSchema}
      _outputSchema={AwsS3BucketAbacOutputSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketAbac = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3BucketAbacOutputProps>(
    AwsS3BucketAbac,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3BucketAbacs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3BucketAbacOutputProps>(
    AwsS3BucketAbac,
    idFilter,
    baseNode,
    optional,
  )
