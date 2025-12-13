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
  addon_name: resolvableValue(z.string()),
  cluster_name: resolvableValue(z.string()),
  addon_version: resolvableValue(z.string().optional()),
  configuration_values: resolvableValue(z.string().optional()),
  pod_identity_association: resolvableValue(
    z.object({
      role_arn: z.string(),
      service_account: z.string(),
    }).array().optional(),
  ),
  preserve: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  resolve_conflicts_on_create: resolvableValue(z.string().optional()),
  resolve_conflicts_on_update: resolvableValue(z.string().optional()),
  service_account_role_arn: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  modified_at: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/eks_addon

export function AwsEksAddon(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eks_addon'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEksAddon = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsEksAddon, idFilter, baseNode)

export const useAwsEksAddons = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsEksAddon, idFilter, baseNode)
