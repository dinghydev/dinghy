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

export const DataAwsCloudformationExportInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsCloudformationExportOutputSchema = z.object({
  exporting_stack_id: z.string().optional(),
  value: z.string().optional(),
})

export type DataAwsCloudformationExportInputProps =
  & z.input<typeof DataAwsCloudformationExportInputSchema>
  & NodeProps

export type DataAwsCloudformationExportOutputProps =
  & z.output<typeof DataAwsCloudformationExportOutputSchema>
  & z.output<typeof DataAwsCloudformationExportInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cloudformation_export

export function DataAwsCloudformationExport(
  props: Partial<DataAwsCloudformationExportInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudformation_export'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCloudformationExportInputSchema}
      _outputSchema={DataAwsCloudformationExportOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCloudformationExport = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCloudformationExportOutputProps>(
    DataAwsCloudformationExport,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCloudformationExports = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCloudformationExportOutputProps>(
    DataAwsCloudformationExport,
    idFilter,
    baseNode,
    optional,
  )
