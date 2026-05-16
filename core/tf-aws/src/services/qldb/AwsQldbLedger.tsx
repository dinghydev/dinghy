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

export const AwsQldbLedgerInputSchema = TfMetaSchema.extend({
  permissions_mode: resolvableValue(z.string()),
  deletion_protection: resolvableValue(z.boolean().optional()),
  kms_key: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsQldbLedgerOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsQldbLedgerInputProps =
  & z.input<typeof AwsQldbLedgerInputSchema>
  & NodeProps

export type AwsQldbLedgerOutputProps =
  & z.output<typeof AwsQldbLedgerOutputSchema>
  & z.output<typeof AwsQldbLedgerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/qldb_ledger

export function AwsQldbLedger(props: Partial<AwsQldbLedgerInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_qldb_ledger'
      _category='resource'
      _title={_title}
      _inputSchema={AwsQldbLedgerInputSchema}
      _outputSchema={AwsQldbLedgerOutputSchema}
      {...props}
    />
  )
}

export const useAwsQldbLedger = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsQldbLedgerOutputProps>(
    AwsQldbLedger,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsQldbLedgers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsQldbLedgerOutputProps>(
    AwsQldbLedger,
    idFilter,
    baseNode,
    optional,
  )
