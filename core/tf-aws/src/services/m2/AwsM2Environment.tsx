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

export const InputSchema = z.object({
  engine_type: resolvableValue(z.string()),
  instance_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  apply_changes_during_maintenance_window: resolvableValue(
    z.boolean().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  engine_version: resolvableValue(z.string().optional()),
  force_update: resolvableValue(z.boolean().optional()),
  high_availability_config: resolvableValue(
    z.object({
      desired_capacity: z.number(),
    }).array().optional(),
  ),
  kms_key_id: resolvableValue(z.string().optional()),
  preferred_maintenance_window: resolvableValue(z.string().optional()),
  publicly_accessible: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  security_group_ids: resolvableValue(z.string().array().optional()),
  storage_configuration: resolvableValue(
    z.object({
      efs: z.object({
        file_system_id: z.string(),
        mount_point: z.string(),
      }).array().optional(),
      fsx: z.object({
        file_system_id: z.string(),
        mount_point: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  subnet_ids: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  environment_id: z.string().optional(),
  id: z.string().optional(),
  load_balancer_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/m2_environment

export function AwsM2Environment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_m2_environment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsM2Environment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsM2Environment, idFilter, baseNode, optional)

export const useAwsM2Environments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsM2Environment, idFilter, baseNode, optional)
