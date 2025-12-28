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
  bypass_policy_lockout_safety_check: resolvableValue(z.boolean().optional()),
  deletion_window_in_days: resolvableValue(z.number().optional()),
  description: resolvableValue(z.string().optional()),
  enabled: resolvableValue(z.boolean().optional()),
  key_material_base64: resolvableValue(z.string().optional()),
  key_spec: resolvableValue(z.string().optional()),
  key_usage: resolvableValue(z.string().optional()),
  multi_region: resolvableValue(z.boolean().optional()),
  policy: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  valid_to: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  expiration_model: z.string().optional(),
  id: z.string().optional(),
  key_state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/kms_external_key

export function AwsKmsExternalKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kms_external_key'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsKmsExternalKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsKmsExternalKey, idFilter, baseNode, optional)

export const useAwsKmsExternalKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsKmsExternalKey, idFilter, baseNode, optional)
