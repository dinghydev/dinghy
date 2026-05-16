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

export const AwsInvoicingInvoiceUnitInputSchema = TfMetaSchema.extend({
  invoice_receiver: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  rule: resolvableValue(
    z.object({
      linked_accounts: z.string().array(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tax_inheritance_disabled: resolvableValue(z.boolean().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsInvoicingInvoiceUnitOutputSchema = z.object({
  arn: z.string().optional(),
  last_modified: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsInvoicingInvoiceUnitImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsInvoicingInvoiceUnitInputProps =
  & z.input<typeof AwsInvoicingInvoiceUnitInputSchema>
  & z.input<typeof AwsInvoicingInvoiceUnitImportSchema>
  & NodeProps

export type AwsInvoicingInvoiceUnitOutputProps =
  & z.output<typeof AwsInvoicingInvoiceUnitOutputSchema>
  & z.output<typeof AwsInvoicingInvoiceUnitInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/invoicing_invoice_unit

export function AwsInvoicingInvoiceUnit(
  props: Partial<AwsInvoicingInvoiceUnitInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_invoicing_invoice_unit'
      _category='resource'
      _title={_title}
      _inputSchema={AwsInvoicingInvoiceUnitInputSchema}
      _outputSchema={AwsInvoicingInvoiceUnitOutputSchema}
      _importSchema={AwsInvoicingInvoiceUnitImportSchema}
      {...props}
    />
  )
}

export const useAwsInvoicingInvoiceUnit = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsInvoicingInvoiceUnitOutputProps>(
    AwsInvoicingInvoiceUnit,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsInvoicingInvoiceUnits = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsInvoicingInvoiceUnitOutputProps>(
    AwsInvoicingInvoiceUnit,
    idFilter,
    baseNode,
    optional,
  )
