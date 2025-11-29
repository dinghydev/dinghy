import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/kms_replica_key

export const InputSchema = z.object({
  primary_key_arn: resolvableValue(z.string()),
  bypass_policy_lockout_safety_check: resolvableValue(z.boolean().optional()),
  deletion_window_in_days: resolvableValue(z.number().optional()),
  description: resolvableValue(z.string().optional()),
  enabled: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  policy: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  key_id: z.string().optional(),
  key_rotation_enabled: z.boolean().optional(),
  key_spec: z.string().optional(),
  key_usage: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsKmsReplicaKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kms_replica_key'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsKmsReplicaKey = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsKmsReplicaKey, node, id)

export const useAwsKmsReplicaKeys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsKmsReplicaKey, node, id)
