import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsCostoptimizationhubPreferencesInputSchema = TfMetaSchema.extend(
  {
    member_account_discount_visibility: resolvableValue(z.string().optional()),
    savings_estimation_mode: resolvableValue(z.string().optional()),
  },
)

export const AwsCostoptimizationhubPreferencesOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsCostoptimizationhubPreferencesInputProps =
  & z.input<typeof AwsCostoptimizationhubPreferencesInputSchema>
  & NodeProps

export type AwsCostoptimizationhubPreferencesOutputProps =
  & z.output<typeof AwsCostoptimizationhubPreferencesOutputSchema>
  & z.output<typeof AwsCostoptimizationhubPreferencesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/costoptimizationhub_preferences

export function AwsCostoptimizationhubPreferences(
  props: Partial<AwsCostoptimizationhubPreferencesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_costoptimizationhub_preferences'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCostoptimizationhubPreferencesInputSchema}
      _outputSchema={AwsCostoptimizationhubPreferencesOutputSchema}
      {...props}
    />
  )
}

export const useAwsCostoptimizationhubPreferencess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCostoptimizationhubPreferencesOutputProps>(
    AwsCostoptimizationhubPreferences,
    idFilter,
    baseNode,
    optional,
  )
