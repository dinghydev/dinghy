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

export const DataAwsDatazoneEnvironmentBlueprintInputSchema = TfMetaSchema
  .extend({
    domain_id: resolvableValue(z.string()),
    managed: resolvableValue(z.boolean()),
    name: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsDatazoneEnvironmentBlueprintOutputSchema = z.object({
  blueprint_provider: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
})

export type DataAwsDatazoneEnvironmentBlueprintInputProps =
  & z.input<typeof DataAwsDatazoneEnvironmentBlueprintInputSchema>
  & NodeProps

export type DataAwsDatazoneEnvironmentBlueprintOutputProps =
  & z.output<typeof DataAwsDatazoneEnvironmentBlueprintOutputSchema>
  & z.output<typeof DataAwsDatazoneEnvironmentBlueprintInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/datazone_environment_blueprint

export function DataAwsDatazoneEnvironmentBlueprint(
  props: Partial<DataAwsDatazoneEnvironmentBlueprintInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datazone_environment_blueprint'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsDatazoneEnvironmentBlueprintInputSchema}
      _outputSchema={DataAwsDatazoneEnvironmentBlueprintOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsDatazoneEnvironmentBlueprint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsDatazoneEnvironmentBlueprintOutputProps>(
    DataAwsDatazoneEnvironmentBlueprint,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsDatazoneEnvironmentBlueprints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsDatazoneEnvironmentBlueprintOutputProps>(
    DataAwsDatazoneEnvironmentBlueprint,
    idFilter,
    baseNode,
    optional,
  )
