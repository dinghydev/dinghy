import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsS3AccountPublicAccessBlock } from './AwsS3AccountPublicAccessBlock.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/s3_account_public_access_block

export const InputSchema = z.object({
  account_id: resolvableValue(z.string().optional()),
})

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

export function DataAwsS3AccountPublicAccessBlock(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useDataAwsS3AccountPublicAccessBlock = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsS3AccountPublicAccessBlock, node, id)

export const useDataAwsS3AccountPublicAccessBlocks = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsS3AccountPublicAccessBlock, node, id)
