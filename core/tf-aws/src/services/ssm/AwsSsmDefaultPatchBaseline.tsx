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

export const AwsSsmDefaultPatchBaselineInputSchema = TfMetaSchema.extend({
  baseline_id: resolvableValue(z.string()),
  operating_system: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSsmDefaultPatchBaselineOutputSchema = z.object({})

export type AwsSsmDefaultPatchBaselineInputProps =
  & z.input<typeof AwsSsmDefaultPatchBaselineInputSchema>
  & NodeProps

export type AwsSsmDefaultPatchBaselineOutputProps =
  & z.output<typeof AwsSsmDefaultPatchBaselineOutputSchema>
  & z.output<typeof AwsSsmDefaultPatchBaselineInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssm_default_patch_baseline

export function AwsSsmDefaultPatchBaseline(
  props: Partial<AwsSsmDefaultPatchBaselineInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_default_patch_baseline'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsmDefaultPatchBaselineInputSchema}
      _outputSchema={AwsSsmDefaultPatchBaselineOutputSchema}
      {...props}
    />
  )
}

export const useAwsSsmDefaultPatchBaseline = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsmDefaultPatchBaselineOutputProps>(
    AwsSsmDefaultPatchBaseline,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsmDefaultPatchBaselines = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsmDefaultPatchBaselineOutputProps>(
    AwsSsmDefaultPatchBaseline,
    idFilter,
    baseNode,
    optional,
  )
