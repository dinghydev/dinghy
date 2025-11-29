import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSsmPatchBaseline } from './AwsSsmPatchBaseline.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ssm_patch_baseline

export const InputSchema = z.object({
  owner: resolvableValue(z.string()),
  default_baseline: resolvableValue(z.boolean().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  operating_system: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  approval_rule: z.object({
    approve_after_days: z.number(),
    approve_until_date: z.string(),
    compliance_level: z.string(),
    enable_non_security: z.boolean(),
    patch_filter: z.object({
      key: z.string(),
      values: z.string().array(),
    }).array(),
  }).array().optional(),
  approved_patches: z.string().array().optional(),
  approved_patches_compliance_level: z.string().optional(),
  approved_patches_enable_non_security: z.boolean().optional(),
  available_security_updates_compliance_status: z.string().optional(),
  description: z.string().optional(),
  global_filter: z.object({
    key: z.string(),
    values: z.string().array(),
  }).array().optional(),
  id: z.string().optional(),
  json: z.string().optional(),
  name: z.string().optional(),
  rejected_patches: z.string().array().optional(),
  rejected_patches_action: z.string().optional(),
  source: z.object({
    configuration: z.string(),
    name: z.string(),
    products: z.string().array(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsSsmPatchBaseline(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsSsmPatchBaseline
      _type='aws_ssm_patch_baseline'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSsmPatchBaseline = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsSsmPatchBaseline, node, id)

export const useDataAwsSsmPatchBaselines = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsSsmPatchBaseline, node, id)
