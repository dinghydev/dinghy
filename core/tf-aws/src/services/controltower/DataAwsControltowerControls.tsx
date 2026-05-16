import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsControltowerControlsInputSchema = TfMetaSchema.extend({
  target_identifier: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsControltowerControlsOutputSchema = z.object({
  enabled_controls: z.string().array().optional(),
})

export type DataAwsControltowerControlsInputProps =
  & z.input<typeof DataAwsControltowerControlsInputSchema>
  & NodeProps

export type DataAwsControltowerControlsOutputProps =
  & z.output<typeof DataAwsControltowerControlsOutputSchema>
  & z.output<typeof DataAwsControltowerControlsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/controltower_controls

export function DataAwsControltowerControls(
  props: Partial<DataAwsControltowerControlsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_controltower_controls'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsControltowerControlsInputSchema}
      _outputSchema={DataAwsControltowerControlsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsControltowerControlss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsControltowerControlsOutputProps>(
    DataAwsControltowerControls,
    idFilter,
    baseNode,
    optional,
  )
