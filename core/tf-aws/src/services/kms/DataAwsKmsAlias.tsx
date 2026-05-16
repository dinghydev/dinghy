import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsKmsAlias } from './AwsKmsAlias.tsx'

export const DataAwsKmsAliasInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsKmsAliasOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  target_key_arn: z.string().optional(),
  target_key_id: z.string().optional(),
})

export type DataAwsKmsAliasInputProps =
  & z.input<typeof DataAwsKmsAliasInputSchema>
  & NodeProps

export type DataAwsKmsAliasOutputProps =
  & z.output<typeof DataAwsKmsAliasOutputSchema>
  & z.output<typeof DataAwsKmsAliasInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/kms_alias

export function DataAwsKmsAlias(props: Partial<DataAwsKmsAliasInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsKmsAlias
      _type='aws_kms_alias'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsKmsAliasInputSchema}
      _outputSchema={DataAwsKmsAliasOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsKmsAliass = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsKmsAliasOutputProps>(
    DataAwsKmsAlias,
    idFilter,
    baseNode,
    optional,
  )
