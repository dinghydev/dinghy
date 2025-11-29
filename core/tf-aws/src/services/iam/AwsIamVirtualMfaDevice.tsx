import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iam_virtual_mfa_device

export const InputSchema = z.object({
  virtual_mfa_device_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  path: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  base_32_string_seed: z.string().optional(),
  enable_date: z.string().optional(),
  qr_code_png: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  user_name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsIamVirtualMfaDevice(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_virtual_mfa_device'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIamVirtualMfaDevice = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIamVirtualMfaDevice, node, id)

export const useAwsIamVirtualMfaDevices = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIamVirtualMfaDevice, node, id)
