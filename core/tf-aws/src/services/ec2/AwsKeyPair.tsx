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

export const AwsKeyPairInputSchema = TfMetaSchema.extend({
  public_key: resolvableValue(z.string()),
  key_name: resolvableValue(z.string().optional()),
  key_name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsKeyPairOutputSchema = z.object({
  arn: z.string().optional(),
  fingerprint: z.string().optional(),
  id: z.string().optional(),
  key_name: z.string().optional(),
  key_pair_id: z.string().optional(),
  key_type: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsKeyPairInputProps =
  & z.input<typeof AwsKeyPairInputSchema>
  & NodeProps

export type AwsKeyPairOutputProps =
  & z.output<typeof AwsKeyPairOutputSchema>
  & z.output<typeof AwsKeyPairInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/key_pair

export function AwsKeyPair(props: Partial<AwsKeyPairInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_key_pair'
      _category='resource'
      _title={_title}
      _inputSchema={AwsKeyPairInputSchema}
      _outputSchema={AwsKeyPairOutputSchema}
      {...props}
    />
  )
}

export const useAwsKeyPair = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsKeyPairOutputProps>(AwsKeyPair, idFilter, baseNode, optional)

export const useAwsKeyPairs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsKeyPairOutputProps>(AwsKeyPair, idFilter, baseNode, optional)
