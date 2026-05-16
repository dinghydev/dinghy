import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEmrReleaseLabelsInputSchema = TfMetaSchema.extend({
  filters: resolvableValue(
    z.object({
      application: z.string().optional(),
      prefix: z.string().optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsEmrReleaseLabelsOutputSchema = z.object({
  release_labels: z.string().array().optional(),
})

export type DataAwsEmrReleaseLabelsInputProps =
  & z.input<typeof DataAwsEmrReleaseLabelsInputSchema>
  & NodeProps

export type DataAwsEmrReleaseLabelsOutputProps =
  & z.output<typeof DataAwsEmrReleaseLabelsOutputSchema>
  & z.output<typeof DataAwsEmrReleaseLabelsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/emr_release_labels

export function DataAwsEmrReleaseLabels(
  props: Partial<DataAwsEmrReleaseLabelsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_emr_release_labels'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEmrReleaseLabelsInputSchema}
      _outputSchema={DataAwsEmrReleaseLabelsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEmrReleaseLabelss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEmrReleaseLabelsOutputProps>(
    DataAwsEmrReleaseLabels,
    idFilter,
    baseNode,
    optional,
  )
