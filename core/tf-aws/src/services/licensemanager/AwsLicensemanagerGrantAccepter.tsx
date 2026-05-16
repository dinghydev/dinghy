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

export const AwsLicensemanagerGrantAccepterInputSchema = TfMetaSchema.extend({
  grant_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsLicensemanagerGrantAccepterOutputSchema = z.object({
  allowed_operations: z.set(z.string()).optional(),
  home_region: z.string().optional(),
  id: z.string().optional(),
  license_arn: z.string().optional(),
  name: z.string().optional(),
  parent_arn: z.string().optional(),
  principal: z.string().optional(),
  status: z.string().optional(),
  version: z.string().optional(),
})

export type AwsLicensemanagerGrantAccepterInputProps =
  & z.input<typeof AwsLicensemanagerGrantAccepterInputSchema>
  & NodeProps

export type AwsLicensemanagerGrantAccepterOutputProps =
  & z.output<typeof AwsLicensemanagerGrantAccepterOutputSchema>
  & z.output<typeof AwsLicensemanagerGrantAccepterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/licensemanager_grant_accepter

export function AwsLicensemanagerGrantAccepter(
  props: Partial<AwsLicensemanagerGrantAccepterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_licensemanager_grant_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLicensemanagerGrantAccepterInputSchema}
      _outputSchema={AwsLicensemanagerGrantAccepterOutputSchema}
      {...props}
    />
  )
}

export const useAwsLicensemanagerGrantAccepter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLicensemanagerGrantAccepterOutputProps>(
    AwsLicensemanagerGrantAccepter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLicensemanagerGrantAccepters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLicensemanagerGrantAccepterOutputProps>(
    AwsLicensemanagerGrantAccepter,
    idFilter,
    baseNode,
    optional,
  )
