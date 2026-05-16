import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsDxLocationsInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsDxLocationsOutputSchema = z.object({
  location_codes: z.set(z.string()).optional(),
})

export type DataAwsDxLocationsInputProps =
  & z.input<typeof DataAwsDxLocationsInputSchema>
  & NodeProps

export type DataAwsDxLocationsOutputProps =
  & z.output<typeof DataAwsDxLocationsOutputSchema>
  & z.output<typeof DataAwsDxLocationsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dx_locations

export function DataAwsDxLocations(
  props: Partial<DataAwsDxLocationsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_locations'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsDxLocationsInputSchema}
      _outputSchema={DataAwsDxLocationsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsDxLocationss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsDxLocationsOutputProps>(
    DataAwsDxLocations,
    idFilter,
    baseNode,
    optional,
  )
