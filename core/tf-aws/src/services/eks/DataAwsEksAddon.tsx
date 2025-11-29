import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEksAddon } from './AwsEksAddon.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/eks_addon

export const InputSchema = z.object({
  addon_name: resolvableValue(z.string()),
  cluster_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  addon_version: z.string().optional(),
  arn: z.string().optional(),
  configuration_values: z.string().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  modified_at: z.string().optional(),
  pod_identity_association: z.object({
    role_arn: z.string(),
    service_account: z.string(),
  }).array().optional(),
  service_account_role_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsEksAddon(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsEksAddon
      _type='aws_eks_addon'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEksAddon = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsEksAddon, node, id)

export const useDataAwsEksAddons = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsEksAddon, node, id)
