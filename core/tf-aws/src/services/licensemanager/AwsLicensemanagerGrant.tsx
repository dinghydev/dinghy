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
  allowed_operations: resolvableValue(z.string().array()),
  home_region: resolvableValue(z.string()),
  license_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  principal: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  parent_arn: z.string().optional(),
  status: z.string().optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/licensemanager_grant

export function AwsLicensemanagerGrant(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_licensemanager_grant'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLicensemanagerGrant = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsLicensemanagerGrant, idFilter, baseNode)

export const useAwsLicensemanagerGrants = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsLicensemanagerGrant, idFilter, baseNode)
