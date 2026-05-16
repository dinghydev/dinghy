import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsS3AccountPublicAccessBlock } from './AwsS3AccountPublicAccessBlock.tsx'

export const DataAwsS3AccountPublicAccessBlockInputSchema = TfMetaSchema.extend(
  {
    account_id: resolvableValue(z.string().optional()),
  },
)

export const DataAwsS3AccountPublicAccessBlockOutputSchema = z.object({
  block_public_acls: z.boolean().optional(),
  block_public_policy: z.boolean().optional(),
  id: z.string().optional(),
  ignore_public_acls: z.boolean().optional(),
  restrict_public_buckets: z.boolean().optional(),
})

export type DataAwsS3AccountPublicAccessBlockInputProps =
  & z.input<typeof DataAwsS3AccountPublicAccessBlockInputSchema>
  & NodeProps

export type DataAwsS3AccountPublicAccessBlockOutputProps =
  & z.output<typeof DataAwsS3AccountPublicAccessBlockOutputSchema>
  & z.output<typeof DataAwsS3AccountPublicAccessBlockInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/s3_account_public_access_block

export function DataAwsS3AccountPublicAccessBlock(
  props: Partial<DataAwsS3AccountPublicAccessBlockInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsS3AccountPublicAccessBlock
      _type='aws_s3_account_public_access_block'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsS3AccountPublicAccessBlockInputSchema}
      _outputSchema={DataAwsS3AccountPublicAccessBlockOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsS3AccountPublicAccessBlock = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsS3AccountPublicAccessBlockOutputProps>(
    DataAwsS3AccountPublicAccessBlock,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsS3AccountPublicAccessBlocks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsS3AccountPublicAccessBlockOutputProps>(
    DataAwsS3AccountPublicAccessBlock,
    idFilter,
    baseNode,
    optional,
  )
