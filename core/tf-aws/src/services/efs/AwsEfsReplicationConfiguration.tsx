import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/efs_replication_configuration

export const InputSchema = z.object({
  source_file_system_id: resolvableValue(z.string()),
  destination: resolvableValue(z.object({
    availability_zone_name: z.string().optional(),
    file_system_id: z.string().optional(),
    kms_key_id: z.string().optional(),
    region: z.string().optional(),
    status: z.string(),
  })),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  creation_time: z.string().optional(),
  original_source_file_system_arn: z.string().optional(),
  source_file_system_arn: z.string().optional(),
  source_file_system_region: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEfsReplicationConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_efs_replication_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEfsReplicationConfiguration = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEfsReplicationConfiguration, node, id)

export const useAwsEfsReplicationConfigurations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEfsReplicationConfiguration, node, id)
