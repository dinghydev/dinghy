import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsSsmPatchBaselinesInputSchema = TfMetaSchema.extend({
  default_baselines: resolvableValue(z.boolean().optional()),
  filter: resolvableValue(
    z.object({
      key: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSsmPatchBaselinesOutputSchema = z.object({
  baseline_identities: z.object({
    baseline_description: z.string(),
    baseline_id: z.string(),
    baseline_name: z.string(),
    default_baseline: z.boolean(),
    operating_system: z.string(),
  }).array().optional(),
})

export type DataAwsSsmPatchBaselinesInputProps =
  & z.input<typeof DataAwsSsmPatchBaselinesInputSchema>
  & NodeProps

export type DataAwsSsmPatchBaselinesOutputProps =
  & z.output<typeof DataAwsSsmPatchBaselinesOutputSchema>
  & z.output<typeof DataAwsSsmPatchBaselinesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ssm_patch_baselines

export function DataAwsSsmPatchBaselines(
  props: Partial<DataAwsSsmPatchBaselinesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_patch_baselines'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSsmPatchBaselinesInputSchema}
      _outputSchema={DataAwsSsmPatchBaselinesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSsmPatchBaseliness = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSsmPatchBaselinesOutputProps>(
    DataAwsSsmPatchBaselines,
    idFilter,
    baseNode,
    optional,
  )
