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
  exportable: resolvableValue(z.boolean()),
  id: resolvableValue(z.string()),
  deletion_window_in_days: resolvableValue(z.number().optional()),
  enabled: resolvableValue(z.boolean().optional()),
  key_attributes: resolvableValue(
    z.object({
      key_algorithm: z.string(),
      key_class: z.string(),
      key_usage: z.string(),
      key_modes_of_use: z.object({
        decrypt: z.boolean().optional(),
        derive_key: z.boolean().optional(),
        encrypt: z.boolean().optional(),
        generate: z.boolean().optional(),
        no_restrictions: z.boolean().optional(),
        sign: z.boolean().optional(),
        unwrap: z.boolean().optional(),
        verify: z.boolean().optional(),
        wrap: z.boolean().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  key_check_value_algorithm: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  key_check_value: z.string().optional(),
  key_origin: z.string().optional(),
  key_state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/paymentcryptography_key

export function AwsPaymentcryptographyKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_paymentcryptography_key'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsPaymentcryptographyKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsPaymentcryptographyKey,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPaymentcryptographyKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsPaymentcryptographyKey,
    idFilter,
    baseNode,
    optional,
  )
