import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsIotLoggingOptionsInputSchema = TfMetaSchema.extend({
  default_log_level: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  disable_all_logs: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsIotLoggingOptionsOutputSchema = z.object({})

export type AwsIotLoggingOptionsInputProps =
  & z.input<typeof AwsIotLoggingOptionsInputSchema>
  & NodeProps

export type AwsIotLoggingOptionsOutputProps =
  & z.output<typeof AwsIotLoggingOptionsOutputSchema>
  & z.output<typeof AwsIotLoggingOptionsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iot_logging_options

export function AwsIotLoggingOptions(
  props: Partial<AwsIotLoggingOptionsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_logging_options'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIotLoggingOptionsInputSchema}
      _outputSchema={AwsIotLoggingOptionsOutputSchema}
      {...props}
    />
  )
}

export const useAwsIotLoggingOptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIotLoggingOptionsOutputProps>(
    AwsIotLoggingOptions,
    idFilter,
    baseNode,
    optional,
  )
