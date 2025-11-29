import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lightsail_key_pair

export const InputSchema = z.object({
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  pgp_key: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  encrypted_fingerprint: z.string().optional(),
  encrypted_private_key: z.string().optional(),
  fingerprint: z.string().optional(),
  id: z.string().optional(),
  private_key: z.string().optional(),
  public_key: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLightsailKeyPair(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_key_pair'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailKeyPair = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLightsailKeyPair, node, id)

export const useAwsLightsailKeyPairs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLightsailKeyPair, node, id)
