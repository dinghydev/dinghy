import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/kms_public_key

export const InputSchema = z.object({
  key_id: resolvableValue(z.string()),
  grant_tokens: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  customer_master_key_spec: z.string().optional(),
  encryption_algorithms: z.string().array().optional(),
  id: z.string().optional(),
  key_usage: z.string().optional(),
  public_key: z.string().optional(),
  public_key_pem: z.string().optional(),
  signing_algorithms: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsKmsPublicKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kms_public_key'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsKmsPublicKey = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsKmsPublicKey, node, id)

export const useDataAwsKmsPublicKeys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsKmsPublicKey, node, id)
