import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsQldbLedger } from './AwsQldbLedger.tsx'

export const DataAwsQldbLedgerInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const DataAwsQldbLedgerOutputSchema = z.object({
  arn: z.string().optional(),
  deletion_protection: z.boolean().optional(),
  kms_key: z.string().optional(),
  permissions_mode: z.string().optional(),
})

export type DataAwsQldbLedgerInputProps =
  & z.input<typeof DataAwsQldbLedgerInputSchema>
  & NodeProps

export type DataAwsQldbLedgerOutputProps =
  & z.output<typeof DataAwsQldbLedgerOutputSchema>
  & z.output<typeof DataAwsQldbLedgerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/qldb_ledger

export function DataAwsQldbLedger(props: Partial<DataAwsQldbLedgerInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsQldbLedger
      _type='aws_qldb_ledger'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsQldbLedgerInputSchema}
      _outputSchema={DataAwsQldbLedgerOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsQldbLedger = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsQldbLedgerOutputProps>(
    DataAwsQldbLedger,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsQldbLedgers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsQldbLedgerOutputProps>(
    DataAwsQldbLedger,
    idFilter,
    baseNode,
    optional,
  )
