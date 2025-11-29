import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3_account_public_access_block

export const InputSchema = z.object({
  account_id: resolvableValue(z.string().optional()),
  block_public_acls: resolvableValue(z.boolean().optional()),
  block_public_policy: resolvableValue(z.boolean().optional()),
  ignore_public_acls: resolvableValue(z.boolean().optional()),
  restrict_public_buckets: resolvableValue(z.boolean().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsS3AccountPublicAccessBlock(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_account_public_access_block'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3AccountPublicAccessBlock = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsS3AccountPublicAccessBlock, node, id)

export const useAwsS3AccountPublicAccessBlocks = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsS3AccountPublicAccessBlock, node, id)
