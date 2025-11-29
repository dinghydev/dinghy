import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/licensemanager_grant_accepter

export const InputSchema = z.object({
  grant_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  allowed_operations: z.string().array().optional(),
  home_region: z.string().optional(),
  id: z.string().optional(),
  license_arn: z.string().optional(),
  name: z.string().optional(),
  parent_arn: z.string().optional(),
  principal: z.string().optional(),
  status: z.string().optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLicensemanagerGrantAccepter(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_licensemanager_grant_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLicensemanagerGrantAccepter = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLicensemanagerGrantAccepter, node, id)

export const useAwsLicensemanagerGrantAccepters = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLicensemanagerGrantAccepter, node, id)
