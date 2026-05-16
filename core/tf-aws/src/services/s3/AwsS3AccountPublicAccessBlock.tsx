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

export const AwsS3AccountPublicAccessBlockInputSchema = TfMetaSchema.extend({
  account_id: resolvableValue(z.string().optional()),
  block_public_acls: resolvableValue(z.boolean().optional()),
  block_public_policy: resolvableValue(z.boolean().optional()),
  ignore_public_acls: resolvableValue(z.boolean().optional()),
  restrict_public_buckets: resolvableValue(z.boolean().optional()),
})

export const AwsS3AccountPublicAccessBlockOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsS3AccountPublicAccessBlockInputProps =
  & z.input<typeof AwsS3AccountPublicAccessBlockInputSchema>
  & NodeProps

export type AwsS3AccountPublicAccessBlockOutputProps =
  & z.output<typeof AwsS3AccountPublicAccessBlockOutputSchema>
  & z.output<typeof AwsS3AccountPublicAccessBlockInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3_account_public_access_block

export function AwsS3AccountPublicAccessBlock(
  props: Partial<AwsS3AccountPublicAccessBlockInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_account_public_access_block'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3AccountPublicAccessBlockInputSchema}
      _outputSchema={AwsS3AccountPublicAccessBlockOutputSchema}
      {...props}
    />
  )
}

export const useAwsS3AccountPublicAccessBlock = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3AccountPublicAccessBlockOutputProps>(
    AwsS3AccountPublicAccessBlock,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3AccountPublicAccessBlocks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3AccountPublicAccessBlockOutputProps>(
    AwsS3AccountPublicAccessBlock,
    idFilter,
    baseNode,
    optional,
  )
