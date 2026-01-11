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

export const InputSchema = z.object({
  account_id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  block_public_acls: z.boolean().optional(),
  block_public_policy: z.boolean().optional(),
  id: z.string().optional(),
  ignore_public_acls: z.boolean().optional(),
  restrict_public_buckets: z.boolean().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/s3_account_public_access_block

export function DataAwsS3AccountPublicAccessBlock(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsS3AccountPublicAccessBlock
      _type='aws_s3_account_public_access_block'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsS3AccountPublicAccessBlock = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsS3AccountPublicAccessBlock,
    idFilter,
    baseNode,
    optional,
  )
