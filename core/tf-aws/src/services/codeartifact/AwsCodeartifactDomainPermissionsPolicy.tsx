import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/codeartifact_domain_permissions_policy

export const InputSchema = z.object({
  domain: resolvableValue(z.string()),
  domain_owner: resolvableValue(z.string().optional()),
  policy_document: resolvableValue(z.string().optional()),
  policy_revision: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  resource_arn: z.string().optional(),
})

export const ImportSchema = z.object({
  resource_arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCodeartifactDomainPermissionsPolicy(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codeartifact_domain_permissions_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsCodeartifactDomainPermissionsPolicy = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsCodeartifactDomainPermissionsPolicy, node, id)

export const useAwsCodeartifactDomainPermissionsPolicys = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsCodeartifactDomainPermissionsPolicy, node, id)
