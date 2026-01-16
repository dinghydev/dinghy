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
  iso_country_code: resolvableValue(z.string()),
  message_type: resolvableValue(z.string()),
  number_capabilities: resolvableValue(z.string().array()),
  number_type: resolvableValue(z.string()),
  deletion_protection_enabled: resolvableValue(z.boolean().optional()),
  opt_out_list_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  registration_id: resolvableValue(z.string().optional()),
  self_managed_opt_outs_enabled: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  two_way_channel_arn: resolvableValue(z.string().optional()),
  two_way_channel_enabled: resolvableValue(z.boolean().optional()),
  two_way_channel_role: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  monthly_leasing_price: z.string().optional(),
  phone_number: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number

export function AwsPinpointsmsvoicev2PhoneNumber(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pinpointsmsvoicev2_phone_number'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsPinpointsmsvoicev2PhoneNumber = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsPinpointsmsvoicev2PhoneNumber,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPinpointsmsvoicev2PhoneNumbers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsPinpointsmsvoicev2PhoneNumber,
    idFilter,
    baseNode,
    optional,
  )
