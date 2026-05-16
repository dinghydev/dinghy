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

export const AwsEfsReplicationConfigurationInputSchema = TfMetaSchema.extend({
  destination: resolvableValue(z.object({
    availability_zone_name: z.string().optional(),
    file_system_id: z.string().optional(),
    kms_key_id: z.string().optional(),
    region: z.string().optional(),
    status: z.string().optional(),
  })),
  source_file_system_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsEfsReplicationConfigurationOutputSchema = z.object({
  creation_time: z.string().optional(),
  original_source_file_system_arn: z.string().optional(),
  source_file_system_arn: z.string().optional(),
  source_file_system_region: z.string().optional(),
})

export type AwsEfsReplicationConfigurationInputProps =
  & z.input<typeof AwsEfsReplicationConfigurationInputSchema>
  & NodeProps

export type AwsEfsReplicationConfigurationOutputProps =
  & z.output<typeof AwsEfsReplicationConfigurationOutputSchema>
  & z.output<typeof AwsEfsReplicationConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/efs_replication_configuration

export function AwsEfsReplicationConfiguration(
  props: Partial<AwsEfsReplicationConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_efs_replication_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEfsReplicationConfigurationInputSchema}
      _outputSchema={AwsEfsReplicationConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsEfsReplicationConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEfsReplicationConfigurationOutputProps>(
    AwsEfsReplicationConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEfsReplicationConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEfsReplicationConfigurationOutputProps>(
    AwsEfsReplicationConfiguration,
    idFilter,
    baseNode,
    optional,
  )
