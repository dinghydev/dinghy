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

export const AwsEcrReplicationConfigurationInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  replication_configuration: resolvableValue(
    z.object({
      rule: z.object({
        destination: z.object({
          region: z.string(),
          registry_id: z.string(),
        }).array(),
        repository_filter: z.object({
          filter: z.string(),
          filter_type: z.string(),
        }).array().optional(),
      }).array(),
    }).optional(),
  ),
})

export const AwsEcrReplicationConfigurationOutputSchema = z.object({
  registry_id: z.string().optional(),
})

export type AwsEcrReplicationConfigurationInputProps =
  & z.input<typeof AwsEcrReplicationConfigurationInputSchema>
  & NodeProps

export type AwsEcrReplicationConfigurationOutputProps =
  & z.output<typeof AwsEcrReplicationConfigurationOutputSchema>
  & z.output<typeof AwsEcrReplicationConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ecr_replication_configuration

export function AwsEcrReplicationConfiguration(
  props: Partial<AwsEcrReplicationConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_replication_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEcrReplicationConfigurationInputSchema}
      _outputSchema={AwsEcrReplicationConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsEcrReplicationConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEcrReplicationConfigurationOutputProps>(
    AwsEcrReplicationConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEcrReplicationConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEcrReplicationConfigurationOutputProps>(
    AwsEcrReplicationConfiguration,
    idFilter,
    baseNode,
    optional,
  )
