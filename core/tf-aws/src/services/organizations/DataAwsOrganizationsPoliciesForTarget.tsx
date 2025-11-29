import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/organizations_policies_for_target

export const InputSchema = z.object({
  filter: resolvableValue(z.string()),
  target_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  ids: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsOrganizationsPoliciesForTarget(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_policies_for_target'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOrganizationsPoliciesForTarget = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsOrganizationsPoliciesForTarget, node, id)

export const useDataAwsOrganizationsPoliciesForTargets = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsOrganizationsPoliciesForTarget, node, id)
