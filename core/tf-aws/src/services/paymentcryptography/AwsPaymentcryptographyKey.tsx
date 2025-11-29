import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/paymentcryptography_key

export const InputSchema = z.object({
  exportable: resolvableValue(z.boolean()),
  id: resolvableValue(z.string()),
  deletion_window_in_days: resolvableValue(z.number().optional()),
  enabled: resolvableValue(z.boolean().optional()),
  key_attributes: resolvableValue(
    z.object({
      key_algorithm: z.string(),
      key_class: z.string(),
      key_usage: z.string(),
    }).optional(),
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

export function AwsPaymentcryptographyKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsPaymentcryptographyKey = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsPaymentcryptographyKey, node, id)

export const useAwsPaymentcryptographyKeys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsPaymentcryptographyKey, node, id)
