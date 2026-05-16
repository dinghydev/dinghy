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

export const AwsKmsReplicaKeyInputSchema = TfMetaSchema.extend({
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

export const AwsKmsReplicaKeyOutputSchema = z.object({
  arn: z.string().optional(),
  key_id: z.string().optional(),
  key_rotation_enabled: z.boolean().optional(),
  key_spec: z.string().optional(),
  key_usage: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsKmsReplicaKeyInputProps =
  & z.input<typeof AwsKmsReplicaKeyInputSchema>
  & NodeProps

export type AwsKmsReplicaKeyOutputProps =
  & z.output<typeof AwsKmsReplicaKeyOutputSchema>
  & z.output<typeof AwsKmsReplicaKeyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/kms_replica_key

export function AwsKmsReplicaKey(props: Partial<AwsKmsReplicaKeyInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kms_replica_key'
      _category='resource'
      _title={_title}
      _inputSchema={AwsKmsReplicaKeyInputSchema}
      _outputSchema={AwsKmsReplicaKeyOutputSchema}
      {...props}
    />
  )
}

export const useAwsKmsReplicaKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsKmsReplicaKeyOutputProps>(
    AwsKmsReplicaKey,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsKmsReplicaKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsKmsReplicaKeyOutputProps>(
    AwsKmsReplicaKey,
    idFilter,
    baseNode,
    optional,
  )
