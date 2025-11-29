import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/kms_secret

export const InputSchema = z.object({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  secret: resolvableValue(
    z.object({
      context: z.record(z.string(), z.string()).optional(),
      grant_tokens: z.string().array().optional(),
      name: z.string(),
      payload: z.string(),
    }).array(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsKmsSecret(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kms_secret'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsKmsSecret = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsKmsSecret, node, id)

export const useDataAwsKmsSecrets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsKmsSecret, node, id)
