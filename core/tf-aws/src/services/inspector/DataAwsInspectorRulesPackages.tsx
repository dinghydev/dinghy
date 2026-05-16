import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsInspectorRulesPackagesInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
})

export const DataAwsInspectorRulesPackagesOutputSchema = z.object({
  arns: z.string().array().optional(),
  id: z.string().optional(),
})

export type DataAwsInspectorRulesPackagesInputProps =
  & z.input<typeof DataAwsInspectorRulesPackagesInputSchema>
  & NodeProps

export type DataAwsInspectorRulesPackagesOutputProps =
  & z.output<typeof DataAwsInspectorRulesPackagesOutputSchema>
  & z.output<typeof DataAwsInspectorRulesPackagesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/inspector_rules_packages

export function DataAwsInspectorRulesPackages(
  props: Partial<DataAwsInspectorRulesPackagesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_inspector_rules_packages'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsInspectorRulesPackagesInputSchema}
      _outputSchema={DataAwsInspectorRulesPackagesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsInspectorRulesPackagess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsInspectorRulesPackagesOutputProps>(
    DataAwsInspectorRulesPackages,
    idFilter,
    baseNode,
    optional,
  )
