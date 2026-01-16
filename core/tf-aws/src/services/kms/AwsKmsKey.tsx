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

export const InputSchema = TfMetaSchema.extend({
  bypass_policy_lockout_safety_check: resolvableValue(z.boolean().optional()),
  custom_key_store_id: resolvableValue(z.string().optional()),
  customer_master_key_spec: resolvableValue(z.string().optional()),
  deletion_window_in_days: resolvableValue(z.number().optional()),
  description: resolvableValue(z.string().optional()),
  enable_key_rotation: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  is_enabled: resolvableValue(z.boolean().optional()),
  key_usage: resolvableValue(z.string().optional()),
  multi_region: resolvableValue(z.boolean().optional()),
  policy: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  rotation_period_in_days: resolvableValue(z.number().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
  xks_key_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  key_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/kms_key

export function AwsKmsKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kms_key'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsKmsKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsKmsKey, idFilter, baseNode, optional)

export const useAwsKmsKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsKmsKey, idFilter, baseNode, optional)
