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

export const DataAwsDxLocationInputSchema = TfMetaSchema.extend({
  location_code: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsDxLocationOutputSchema = z.object({
  available_macsec_port_speeds: z.string().array().optional(),
  available_port_speeds: z.string().array().optional(),
  available_providers: z.string().array().optional(),
  location_name: z.string().optional(),
})

export type DataAwsDxLocationInputProps =
  & z.input<typeof DataAwsDxLocationInputSchema>
  & NodeProps

export type DataAwsDxLocationOutputProps =
  & z.output<typeof DataAwsDxLocationOutputSchema>
  & z.output<typeof DataAwsDxLocationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dx_location

export function DataAwsDxLocation(props: Partial<DataAwsDxLocationInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_location'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsDxLocationInputSchema}
      _outputSchema={DataAwsDxLocationOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsDxLocation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsDxLocationOutputProps>(
    DataAwsDxLocation,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsDxLocations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsDxLocationOutputProps>(
    DataAwsDxLocation,
    idFilter,
    baseNode,
    optional,
  )
