import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsImagebuilderInfrastructureConfigurationsInputSchema =
  TfMetaSchema.extend({
    filter: resolvableValue(
      z.object({
        name: z.string(),
        values: z.string().array(),
      }).array().optional(),
    ),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsImagebuilderInfrastructureConfigurationsOutputSchema = z
  .object({
    arns: z.set(z.string()).optional(),
    names: z.set(z.string()).optional(),
  })

export type DataAwsImagebuilderInfrastructureConfigurationsInputProps =
  & z.input<typeof DataAwsImagebuilderInfrastructureConfigurationsInputSchema>
  & NodeProps

export type DataAwsImagebuilderInfrastructureConfigurationsOutputProps =
  & z.output<typeof DataAwsImagebuilderInfrastructureConfigurationsOutputSchema>
  & z.output<typeof DataAwsImagebuilderInfrastructureConfigurationsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/imagebuilder_infrastructure_configurations

export function DataAwsImagebuilderInfrastructureConfigurations(
  props: Partial<DataAwsImagebuilderInfrastructureConfigurationsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_imagebuilder_infrastructure_configurations'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsImagebuilderInfrastructureConfigurationsInputSchema}
      _outputSchema={DataAwsImagebuilderInfrastructureConfigurationsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsImagebuilderInfrastructureConfigurationss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsImagebuilderInfrastructureConfigurationsOutputProps>(
    DataAwsImagebuilderInfrastructureConfigurations,
    idFilter,
    baseNode,
    optional,
  )
