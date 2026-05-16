import {
  camelCaseToWords,
  type NodeProps,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsUxcServicesInputSchema = TfMetaSchema.extend({})

export const DataAwsUxcServicesOutputSchema = z.object({
  services: z.string().array().optional(),
})

export type DataAwsUxcServicesInputProps =
  & z.input<typeof DataAwsUxcServicesInputSchema>
  & NodeProps

export type DataAwsUxcServicesOutputProps =
  & z.output<typeof DataAwsUxcServicesOutputSchema>
  & z.output<typeof DataAwsUxcServicesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/uxc_services

export function DataAwsUxcServices(
  props: Partial<DataAwsUxcServicesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_uxc_services'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsUxcServicesInputSchema}
      _outputSchema={DataAwsUxcServicesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsUxcServicess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsUxcServicesOutputProps>(
    DataAwsUxcServices,
    idFilter,
    baseNode,
    optional,
  )
