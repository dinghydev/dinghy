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

export const InputSchema = z.object({
  license_arn: resolvableValue(z.string()),
  license_metadata: resolvableValue(
    z.object({
      name: z.string(),
      value: z.string(),
    }).array(),
  ),
  product_sku: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  beneficiary: z.string().optional(),
  consumption_configuration: z.object({
    borrow_configuration: z.object({
      allow_early_check_in: z.boolean(),
      max_time_to_live_in_minutes: z.number(),
    }).array(),
    provisional_configuration: z.object({
      max_time_to_live_in_minutes: z.number(),
    }).array(),
    renew_type: z.string(),
  }).array().optional(),
  create_time: z.string().optional(),
  entitlements: z.set(z.object({
    allow_check_in: z.boolean(),
    max_count: z.number(),
    name: z.string(),
    overage: z.boolean(),
    unit: z.string(),
    value: z.string(),
  })).optional(),
  home_region: z.string().optional(),
  id: z.string().optional(),
  issuer: z.object({
    key_fingerprint: z.string(),
    name: z.string(),
    sign_key: z.string(),
  }).array().optional(),
  license_arn: z.string().optional(),
  license_name: z.string().optional(),
  product_name: z.string().optional(),
  received_metadata: z.object({
    allowed_operations: z.set(z.string()),
    received_status: z.string(),
    received_status_reason: z.string(),
  }).array().optional(),
  status: z.string().optional(),
  validity: z.object({
    begin: z.string(),
    end: z.string(),
  }).array().optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/licensemanager_received_license

export function DataAwsLicensemanagerReceivedLicense(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_licensemanager_received_license'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsLicensemanagerReceivedLicense = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsLicensemanagerReceivedLicense,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsLicensemanagerReceivedLicenses = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsLicensemanagerReceivedLicense,
    idFilter,
    baseNode,
    optional,
  )
