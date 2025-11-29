import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOrganizationsPolicy } from './AwsOrganizationsPolicy.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/organizations_policy

export const InputSchema = z.object({
  policy_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  aws_managed: z.boolean().optional(),
  content: z.string().optional(),
  description: z.string().optional(),
  name: z.string().optional(),
  type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsOrganizationsPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsOrganizationsPolicy
      _type='aws_organizations_policy'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOrganizationsPolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsOrganizationsPolicy, node, id)

export const useDataAwsOrganizationsPolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsOrganizationsPolicy, node, id)
