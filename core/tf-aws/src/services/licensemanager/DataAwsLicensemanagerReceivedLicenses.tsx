import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsLicensemanagerReceivedLicensesInputSchema = TfMetaSchema
  .extend({
    filter: resolvableValue(
      z.object({
        name: z.string(),
        values: z.string().array(),
      }).array().optional(),
    ),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsLicensemanagerReceivedLicensesOutputSchema = z.object({
  arns: z.string().array().optional(),
})

export type DataAwsLicensemanagerReceivedLicensesInputProps =
  & z.input<typeof DataAwsLicensemanagerReceivedLicensesInputSchema>
  & NodeProps

export type DataAwsLicensemanagerReceivedLicensesOutputProps =
  & z.output<typeof DataAwsLicensemanagerReceivedLicensesOutputSchema>
  & z.output<typeof DataAwsLicensemanagerReceivedLicensesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/licensemanager_received_licenses

export function DataAwsLicensemanagerReceivedLicenses(
  props: Partial<DataAwsLicensemanagerReceivedLicensesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_licensemanager_received_licenses'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsLicensemanagerReceivedLicensesInputSchema}
      _outputSchema={DataAwsLicensemanagerReceivedLicensesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsLicensemanagerReceivedLicensess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsLicensemanagerReceivedLicensesOutputProps>(
    DataAwsLicensemanagerReceivedLicenses,
    idFilter,
    baseNode,
    optional,
  )
