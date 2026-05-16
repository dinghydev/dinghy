import {
  camelCaseToWords,
  type NodeProps,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsBillingServiceAccountInputSchema = TfMetaSchema.extend({})

export const DataAwsBillingServiceAccountOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type DataAwsBillingServiceAccountInputProps =
  & z.input<typeof DataAwsBillingServiceAccountInputSchema>
  & NodeProps

export type DataAwsBillingServiceAccountOutputProps =
  & z.output<typeof DataAwsBillingServiceAccountOutputSchema>
  & z.output<typeof DataAwsBillingServiceAccountInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/billing_service_account

export function DataAwsBillingServiceAccount(
  props: Partial<DataAwsBillingServiceAccountInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_billing_service_account'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsBillingServiceAccountInputSchema}
      _outputSchema={DataAwsBillingServiceAccountOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsBillingServiceAccount = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsBillingServiceAccountOutputProps>(
    DataAwsBillingServiceAccount,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsBillingServiceAccounts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsBillingServiceAccountOutputProps>(
    DataAwsBillingServiceAccount,
    idFilter,
    baseNode,
    optional,
  )
