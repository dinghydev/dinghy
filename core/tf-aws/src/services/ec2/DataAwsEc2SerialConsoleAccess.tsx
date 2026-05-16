import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEc2SerialConsoleAccess } from './AwsEc2SerialConsoleAccess.tsx'

export const DataAwsEc2SerialConsoleAccessInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsEc2SerialConsoleAccessOutputSchema = z.object({
  enabled: z.boolean().optional(),
  id: z.string().optional(),
})

export type DataAwsEc2SerialConsoleAccessInputProps =
  & z.input<typeof DataAwsEc2SerialConsoleAccessInputSchema>
  & NodeProps

export type DataAwsEc2SerialConsoleAccessOutputProps =
  & z.output<typeof DataAwsEc2SerialConsoleAccessOutputSchema>
  & z.output<typeof DataAwsEc2SerialConsoleAccessInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_serial_console_access

export function DataAwsEc2SerialConsoleAccess(
  props: Partial<DataAwsEc2SerialConsoleAccessInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsEc2SerialConsoleAccess
      _type='aws_ec2_serial_console_access'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2SerialConsoleAccessInputSchema}
      _outputSchema={DataAwsEc2SerialConsoleAccessOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEc2SerialConsoleAccesss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2SerialConsoleAccessOutputProps>(
    DataAwsEc2SerialConsoleAccess,
    idFilter,
    baseNode,
    optional,
  )
