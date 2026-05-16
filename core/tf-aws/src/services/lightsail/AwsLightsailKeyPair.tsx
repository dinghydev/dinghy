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

export const AwsLightsailKeyPairInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  pgp_key: resolvableValue(z.string().optional()),
  public_key: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsLightsailKeyPairOutputSchema = z.object({
  arn: z.string().optional(),
  encrypted_fingerprint: z.string().optional(),
  encrypted_private_key: z.string().optional(),
  fingerprint: z.string().optional(),
  id: z.string().optional(),
  private_key: z.string().optional(),
  public_key: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsLightsailKeyPairInputProps =
  & z.input<typeof AwsLightsailKeyPairInputSchema>
  & NodeProps

export type AwsLightsailKeyPairOutputProps =
  & z.output<typeof AwsLightsailKeyPairOutputSchema>
  & z.output<typeof AwsLightsailKeyPairInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lightsail_key_pair

export function AwsLightsailKeyPair(
  props: Partial<AwsLightsailKeyPairInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_key_pair'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLightsailKeyPairInputSchema}
      _outputSchema={AwsLightsailKeyPairOutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailKeyPair = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLightsailKeyPairOutputProps>(
    AwsLightsailKeyPair,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLightsailKeyPairs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLightsailKeyPairOutputProps>(
    AwsLightsailKeyPair,
    idFilter,
    baseNode,
    optional,
  )
