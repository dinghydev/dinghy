import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsFisExperimentTemplatesInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const DataAwsFisExperimentTemplatesOutputSchema = z.object({
  ids: z.string().array().optional(),
})

export type DataAwsFisExperimentTemplatesInputProps =
  & z.input<typeof DataAwsFisExperimentTemplatesInputSchema>
  & NodeProps

export type DataAwsFisExperimentTemplatesOutputProps =
  & z.output<typeof DataAwsFisExperimentTemplatesOutputSchema>
  & z.output<typeof DataAwsFisExperimentTemplatesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/fis_experiment_templates

export function DataAwsFisExperimentTemplates(
  props: Partial<DataAwsFisExperimentTemplatesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fis_experiment_templates'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsFisExperimentTemplatesInputSchema}
      _outputSchema={DataAwsFisExperimentTemplatesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsFisExperimentTemplatess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsFisExperimentTemplatesOutputProps>(
    DataAwsFisExperimentTemplates,
    idFilter,
    baseNode,
    optional,
  )
