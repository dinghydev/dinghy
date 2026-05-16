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

export const AwsIamVirtualMfaDeviceInputSchema = TfMetaSchema.extend({
  virtual_mfa_device_name: resolvableValue(z.string()),
  path: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsIamVirtualMfaDeviceOutputSchema = z.object({
  arn: z.string().optional(),
  base_32_string_seed: z.string().optional(),
  enable_date: z.string().optional(),
  id: z.string().optional(),
  qr_code_png: z.string().optional(),
  serial_number: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  user_name: z.string().optional(),
})

export type AwsIamVirtualMfaDeviceInputProps =
  & z.input<typeof AwsIamVirtualMfaDeviceInputSchema>
  & NodeProps

export type AwsIamVirtualMfaDeviceOutputProps =
  & z.output<typeof AwsIamVirtualMfaDeviceOutputSchema>
  & z.output<typeof AwsIamVirtualMfaDeviceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_virtual_mfa_device

export function AwsIamVirtualMfaDevice(
  props: Partial<AwsIamVirtualMfaDeviceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_virtual_mfa_device'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamVirtualMfaDeviceInputSchema}
      _outputSchema={AwsIamVirtualMfaDeviceOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamVirtualMfaDevice = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamVirtualMfaDeviceOutputProps>(
    AwsIamVirtualMfaDevice,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamVirtualMfaDevices = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamVirtualMfaDeviceOutputProps>(
    AwsIamVirtualMfaDevice,
    idFilter,
    baseNode,
    optional,
  )
