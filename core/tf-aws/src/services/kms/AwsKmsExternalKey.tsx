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

export const AwsKmsExternalKeyInputSchema = TfMetaSchema.extend({
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
})

export const AwsKmsExternalKeyOutputSchema = z.object({
  arn: z.string().optional(),
  expiration_model: z.string().optional(),
  id: z.string().optional(),
  key_state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsKmsExternalKeyInputProps =
  & z.input<typeof AwsKmsExternalKeyInputSchema>
  & NodeProps

export type AwsKmsExternalKeyOutputProps =
  & z.output<typeof AwsKmsExternalKeyOutputSchema>
  & z.output<typeof AwsKmsExternalKeyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/kms_external_key

export function AwsKmsExternalKey(props: Partial<AwsKmsExternalKeyInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kms_external_key'
      _category='resource'
      _title={_title}
      _inputSchema={AwsKmsExternalKeyInputSchema}
      _outputSchema={AwsKmsExternalKeyOutputSchema}
      {...props}
    />
  )
}

export const useAwsKmsExternalKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsKmsExternalKeyOutputProps>(
    AwsKmsExternalKey,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsKmsExternalKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsKmsExternalKeyOutputProps>(
    AwsKmsExternalKey,
    idFilter,
    baseNode,
    optional,
  )
