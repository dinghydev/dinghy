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

export const AwsEcrRegistryScanningConfigurationInputSchema = TfMetaSchema
  .extend({
    scan_type: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    rule: resolvableValue(
      z.object({
        scan_frequency: z.string(),
        repository_filter: z.object({
          filter: z.string(),
          filter_type: z.string(),
        }).array(),
      }).array().optional(),
    ),
  })

export const AwsEcrRegistryScanningConfigurationOutputSchema = z.object({
  registry_id: z.string().optional(),
})

export type AwsEcrRegistryScanningConfigurationInputProps =
  & z.input<typeof AwsEcrRegistryScanningConfigurationInputSchema>
  & NodeProps

export type AwsEcrRegistryScanningConfigurationOutputProps =
  & z.output<typeof AwsEcrRegistryScanningConfigurationOutputSchema>
  & z.output<typeof AwsEcrRegistryScanningConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ecr_registry_scanning_configuration

export function AwsEcrRegistryScanningConfiguration(
  props: Partial<AwsEcrRegistryScanningConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_registry_scanning_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEcrRegistryScanningConfigurationInputSchema}
      _outputSchema={AwsEcrRegistryScanningConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsEcrRegistryScanningConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEcrRegistryScanningConfigurationOutputProps>(
    AwsEcrRegistryScanningConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEcrRegistryScanningConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEcrRegistryScanningConfigurationOutputProps>(
    AwsEcrRegistryScanningConfiguration,
    idFilter,
    baseNode,
    optional,
  )
