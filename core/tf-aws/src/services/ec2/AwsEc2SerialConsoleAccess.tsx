import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsEc2SerialConsoleAccessInputSchema = TfMetaSchema.extend({
  enabled: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEc2SerialConsoleAccessOutputSchema = z.object({})

export type AwsEc2SerialConsoleAccessInputProps =
  & z.input<typeof AwsEc2SerialConsoleAccessInputSchema>
  & NodeProps

export type AwsEc2SerialConsoleAccessOutputProps =
  & z.output<typeof AwsEc2SerialConsoleAccessOutputSchema>
  & z.output<typeof AwsEc2SerialConsoleAccessInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_serial_console_access

export function AwsEc2SerialConsoleAccess(
  props: Partial<AwsEc2SerialConsoleAccessInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_serial_console_access'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2SerialConsoleAccessInputSchema}
      _outputSchema={AwsEc2SerialConsoleAccessOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2SerialConsoleAccesss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2SerialConsoleAccessOutputProps>(
    AwsEc2SerialConsoleAccess,
    idFilter,
    baseNode,
    optional,
  )
