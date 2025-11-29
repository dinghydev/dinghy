import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dms_replication_instance

export const InputSchema = z.object({
  replication_instance_class: resolvableValue(z.string()),
  replication_instance_id: resolvableValue(z.string()),
  allocated_storage: resolvableValue(z.number().optional()),
  allow_major_version_upgrade: resolvableValue(z.boolean().optional()),
  apply_immediately: resolvableValue(z.boolean().optional()),
  auto_minor_version_upgrade: resolvableValue(z.boolean().optional()),
  availability_zone: resolvableValue(z.string().optional()),
  dns_name_servers: resolvableValue(z.string().optional()),
  engine_version: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  kerberos_authentication_settings: resolvableValue(
    z.object({
      key_cache_secret_iam_arn: z.string(),
      key_cache_secret_id: z.string(),
      krb5_file_contents: z.string(),
    }).optional(),
  ),
  kms_key_arn: resolvableValue(z.string().optional()),
  multi_az: resolvableValue(z.boolean().optional()),
  network_type: resolvableValue(z.string().optional()),
  preferred_maintenance_window: resolvableValue(z.string().optional()),
  publicly_accessible: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  replication_subnet_group_id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc_security_group_ids: resolvableValue(z.string().array().optional()),
})

export const OutputSchema = z.object({
  replication_instance_arn: z.string().optional(),
  replication_instance_private_ips: z.string().array().optional(),
  replication_instance_public_ips: z.string().array().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDmsReplicationInstance(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dms_replication_instance'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDmsReplicationInstance = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDmsReplicationInstance, node, id)

export const useAwsDmsReplicationInstances = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDmsReplicationInstance, node, id)
