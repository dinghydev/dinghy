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

export const AwsLightsailDatabaseInputSchema = TfMetaSchema.extend({
  blueprint_id: resolvableValue(z.string()),
  bundle_id: resolvableValue(z.string()),
  master_database_name: resolvableValue(z.string()),
  master_password: resolvableValue(z.string()),
  master_username: resolvableValue(z.string()),
  relational_database_name: resolvableValue(z.string()),
  apply_immediately: resolvableValue(z.boolean().optional()),
  availability_zone: resolvableValue(z.string().optional()),
  backup_retention_enabled: resolvableValue(z.boolean().optional()),
  final_snapshot_name: resolvableValue(z.string().optional()),
  preferred_backup_window: resolvableValue(z.string().optional()),
  preferred_maintenance_window: resolvableValue(z.string().optional()),
  publicly_accessible: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  skip_final_snapshot: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsLightsailDatabaseOutputSchema = z.object({
  arn: z.string().optional(),
  ca_certificate_identifier: z.string().optional(),
  cpu_count: z.number().optional(),
  created_at: z.string().optional(),
  disk_size: z.number().optional(),
  engine: z.string().optional(),
  engine_version: z.string().optional(),
  id: z.string().optional(),
  master_endpoint_address: z.string().optional(),
  master_endpoint_port: z.number().optional(),
  ram_size: z.number().optional(),
  secondary_availability_zone: z.string().optional(),
  support_code: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsLightsailDatabaseInputProps =
  & z.input<typeof AwsLightsailDatabaseInputSchema>
  & NodeProps

export type AwsLightsailDatabaseOutputProps =
  & z.output<typeof AwsLightsailDatabaseOutputSchema>
  & z.output<typeof AwsLightsailDatabaseInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lightsail_database

export function AwsLightsailDatabase(
  props: Partial<AwsLightsailDatabaseInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_database'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLightsailDatabaseInputSchema}
      _outputSchema={AwsLightsailDatabaseOutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailDatabase = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLightsailDatabaseOutputProps>(
    AwsLightsailDatabase,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLightsailDatabases = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLightsailDatabaseOutputProps>(
    AwsLightsailDatabase,
    idFilter,
    baseNode,
    optional,
  )
