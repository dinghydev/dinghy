import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEksAddon } from './AwsEksAddon.tsx'

export const DataAwsEksAddonInputSchema = TfMetaSchema.extend({
  addon_name: resolvableValue(z.string()),
  cluster_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const DataAwsEksAddonOutputSchema = z.object({
  addon_version: z.string().optional(),
  arn: z.string().optional(),
  configuration_values: z.string().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  modified_at: z.string().optional(),
  pod_identity_association: z.set(z.object({
    role_arn: z.string(),
    service_account: z.string(),
  })).optional(),
  service_account_role_arn: z.string().optional(),
})

export type DataAwsEksAddonInputProps =
  & z.input<typeof DataAwsEksAddonInputSchema>
  & NodeProps

export type DataAwsEksAddonOutputProps =
  & z.output<typeof DataAwsEksAddonOutputSchema>
  & z.output<typeof DataAwsEksAddonInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/eks_addon

export function DataAwsEksAddon(props: Partial<DataAwsEksAddonInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsEksAddon
      _type='aws_eks_addon'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEksAddonInputSchema}
      _outputSchema={DataAwsEksAddonOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEksAddon = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEksAddonOutputProps>(
    DataAwsEksAddon,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEksAddons = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEksAddonOutputProps>(
    DataAwsEksAddon,
    idFilter,
    baseNode,
    optional,
  )
