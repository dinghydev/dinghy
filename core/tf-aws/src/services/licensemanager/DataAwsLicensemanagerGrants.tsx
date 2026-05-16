import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsLicensemanagerGrantsInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsLicensemanagerGrantsOutputSchema = z.object({
  arns: z.string().array().optional(),
})

export type DataAwsLicensemanagerGrantsInputProps =
  & z.input<typeof DataAwsLicensemanagerGrantsInputSchema>
  & NodeProps

export type DataAwsLicensemanagerGrantsOutputProps =
  & z.output<typeof DataAwsLicensemanagerGrantsOutputSchema>
  & z.output<typeof DataAwsLicensemanagerGrantsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/licensemanager_grants

export function DataAwsLicensemanagerGrants(
  props: Partial<DataAwsLicensemanagerGrantsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_licensemanager_grants'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsLicensemanagerGrantsInputSchema}
      _outputSchema={DataAwsLicensemanagerGrantsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsLicensemanagerGrantss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsLicensemanagerGrantsOutputProps>(
    DataAwsLicensemanagerGrants,
    idFilter,
    baseNode,
    optional,
  )
