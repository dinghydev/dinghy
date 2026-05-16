import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsKeyPair } from './AwsKeyPair.tsx'

export const DataAwsKeyPairInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  include_public_key: resolvableValue(z.boolean().optional()),
  key_name: resolvableValue(z.string().optional()),
  key_pair_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsKeyPairOutputSchema = z.object({
  arn: z.string().optional(),
  create_time: z.string().optional(),
  fingerprint: z.string().optional(),
  id: z.string().optional(),
  key_type: z.string().optional(),
  public_key: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsKeyPairInputProps =
  & z.input<typeof DataAwsKeyPairInputSchema>
  & NodeProps

export type DataAwsKeyPairOutputProps =
  & z.output<typeof DataAwsKeyPairOutputSchema>
  & z.output<typeof DataAwsKeyPairInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/key_pair

export function DataAwsKeyPair(props: Partial<DataAwsKeyPairInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsKeyPair
      _type='aws_key_pair'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsKeyPairInputSchema}
      _outputSchema={DataAwsKeyPairOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsKeyPair = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsKeyPairOutputProps>(
    DataAwsKeyPair,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsKeyPairs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsKeyPairOutputProps>(
    DataAwsKeyPair,
    idFilter,
    baseNode,
    optional,
  )
