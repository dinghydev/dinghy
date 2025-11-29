import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ssm_patch_baselines

export const InputSchema = z.object({
  default_baselines: resolvableValue(z.boolean().optional()),
  filter: resolvableValue(
    z.object({
      key: z.string(),
      values: z.string().array(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  baseline_identities: z.object({
    baseline_description: z.string(),
    baseline_id: z.string(),
    baseline_name: z.string(),
    default_baseline: z.boolean(),
    operating_system: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsSsmPatchBaselines(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_patch_baselines'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSsmPatchBaseliness = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsSsmPatchBaselines, node, id)
