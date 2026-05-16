import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsImagebuilderDistributionConfigurationsInputSchema =
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

export const DataAwsImagebuilderDistributionConfigurationsOutputSchema = z
  .object({
    arns: z.set(z.string()).optional(),
    names: z.set(z.string()).optional(),
  })

export type DataAwsImagebuilderDistributionConfigurationsInputProps =
  & z.input<typeof DataAwsImagebuilderDistributionConfigurationsInputSchema>
  & NodeProps

export type DataAwsImagebuilderDistributionConfigurationsOutputProps =
  & z.output<typeof DataAwsImagebuilderDistributionConfigurationsOutputSchema>
  & z.output<typeof DataAwsImagebuilderDistributionConfigurationsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/imagebuilder_distribution_configurations

export function DataAwsImagebuilderDistributionConfigurations(
  props: Partial<DataAwsImagebuilderDistributionConfigurationsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_imagebuilder_distribution_configurations'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsImagebuilderDistributionConfigurationsInputSchema}
      _outputSchema={DataAwsImagebuilderDistributionConfigurationsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsImagebuilderDistributionConfigurationss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsImagebuilderDistributionConfigurationsOutputProps>(
    DataAwsImagebuilderDistributionConfigurations,
    idFilter,
    baseNode,
    optional,
  )
