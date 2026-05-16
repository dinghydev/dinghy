import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEbsEncryptionByDefault } from './AwsEbsEncryptionByDefault.tsx'

export const DataAwsEbsEncryptionByDefaultInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsEbsEncryptionByDefaultOutputSchema = z.object({
  enabled: z.boolean().optional(),
  id: z.string().optional(),
})

export type DataAwsEbsEncryptionByDefaultInputProps =
  & z.input<typeof DataAwsEbsEncryptionByDefaultInputSchema>
  & NodeProps

export type DataAwsEbsEncryptionByDefaultOutputProps =
  & z.output<typeof DataAwsEbsEncryptionByDefaultOutputSchema>
  & z.output<typeof DataAwsEbsEncryptionByDefaultInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ebs_encryption_by_default

export function DataAwsEbsEncryptionByDefault(
  props: Partial<DataAwsEbsEncryptionByDefaultInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsEbsEncryptionByDefault
      _type='aws_ebs_encryption_by_default'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEbsEncryptionByDefaultInputSchema}
      _outputSchema={DataAwsEbsEncryptionByDefaultOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEbsEncryptionByDefault = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEbsEncryptionByDefaultOutputProps>(
    DataAwsEbsEncryptionByDefault,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEbsEncryptionByDefaults = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEbsEncryptionByDefaultOutputProps>(
    DataAwsEbsEncryptionByDefault,
    idFilter,
    baseNode,
    optional,
  )
