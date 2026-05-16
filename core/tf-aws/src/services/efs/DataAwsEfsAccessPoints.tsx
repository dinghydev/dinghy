import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEfsAccessPointsInputSchema = TfMetaSchema.extend({
  file_system_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsEfsAccessPointsOutputSchema = z.object({
  arns: z.string().array().optional(),
  id: z.string().optional(),
  ids: z.string().array().optional(),
})

export type DataAwsEfsAccessPointsInputProps =
  & z.input<typeof DataAwsEfsAccessPointsInputSchema>
  & NodeProps

export type DataAwsEfsAccessPointsOutputProps =
  & z.output<typeof DataAwsEfsAccessPointsOutputSchema>
  & z.output<typeof DataAwsEfsAccessPointsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/efs_access_points

export function DataAwsEfsAccessPoints(
  props: Partial<DataAwsEfsAccessPointsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_efs_access_points'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEfsAccessPointsInputSchema}
      _outputSchema={DataAwsEfsAccessPointsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEfsAccessPointss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEfsAccessPointsOutputProps>(
    DataAwsEfsAccessPoints,
    idFilter,
    baseNode,
    optional,
  )
