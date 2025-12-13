import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDmsReplicationInstance } from './AwsDmsReplicationInstance.tsx'

export const InputSchema = z.object({
  replication_instance_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  allocated_storage: z.number().optional(),
  auto_minor_version_upgrade: z.boolean().optional(),
  availability_zone: z.string().optional(),
  engine_version: z.string().optional(),
  kms_key_arn: z.string().optional(),
  multi_az: z.boolean().optional(),
  network_type: z.string().optional(),
  preferred_maintenance_window: z.string().optional(),
  publicly_accessible: z.boolean().optional(),
  replication_instance_arn: z.string().optional(),
  replication_instance_class: z.string().optional(),
  replication_instance_private_ips: z.string().array().optional(),
  replication_instance_public_ips: z.string().array().optional(),
  replication_subnet_group_id: z.string().optional(),
  vpc_security_group_ids: z.set(z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/dms_replication_instance

export function DataAwsDmsReplicationInstance(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsDmsReplicationInstance
      _type='aws_dms_replication_instance'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDmsReplicationInstance = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(DataAwsDmsReplicationInstance, idFilter, baseNode)

export const useDataAwsDmsReplicationInstances = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(DataAwsDmsReplicationInstance, idFilter, baseNode)
