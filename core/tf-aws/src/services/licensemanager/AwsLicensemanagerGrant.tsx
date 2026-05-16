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

export const AwsLicensemanagerGrantInputSchema = TfMetaSchema.extend({
  allowed_operations: resolvableValue(z.string().array()),
  home_region: resolvableValue(z.string()),
  license_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  principal: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsLicensemanagerGrantOutputSchema = z.object({
  arn: z.string().optional(),
  home_region: z.string().optional(),
  id: z.string().optional(),
  parent_arn: z.string().optional(),
  status: z.string().optional(),
  version: z.string().optional(),
})

export type AwsLicensemanagerGrantInputProps =
  & z.input<typeof AwsLicensemanagerGrantInputSchema>
  & NodeProps

export type AwsLicensemanagerGrantOutputProps =
  & z.output<typeof AwsLicensemanagerGrantOutputSchema>
  & z.output<typeof AwsLicensemanagerGrantInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/licensemanager_grant

export function AwsLicensemanagerGrant(
  props: Partial<AwsLicensemanagerGrantInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_licensemanager_grant'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLicensemanagerGrantInputSchema}
      _outputSchema={AwsLicensemanagerGrantOutputSchema}
      {...props}
    />
  )
}

export const useAwsLicensemanagerGrant = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLicensemanagerGrantOutputProps>(
    AwsLicensemanagerGrant,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLicensemanagerGrants = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLicensemanagerGrantOutputProps>(
    AwsLicensemanagerGrant,
    idFilter,
    baseNode,
    optional,
  )
