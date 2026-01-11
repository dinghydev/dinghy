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
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  destinations: resolvableValue(
    z.object({
      stream_name: z.string(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  input_devices: resolvableValue(
    z.object({
      id: z.string(),
    }).array().optional(),
  ),
  input_security_groups: resolvableValue(z.string().array().optional()),
  media_connect_flows: resolvableValue(
    z.object({
      flow_arn: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  role_arn: resolvableValue(z.string().optional()),
  sources: resolvableValue(
    z.object({
      password_param: z.string(),
      url: z.string(),
      username: z.string(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc: resolvableValue(
    z.object({
      security_group_ids: z.string().array().optional(),
      subnet_ids: z.string().array(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  attached_channels: z.string().array().optional(),
  input_class: z.string().optional(),
  input_partner_ids: z.string().array().optional(),
  input_source_type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/medialive_input

export function AwsMedialiveInput(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_medialive_input'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsMedialiveInput = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsMedialiveInput, idFilter, baseNode, optional)

export const useAwsMedialiveInputs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsMedialiveInput, idFilter, baseNode, optional)
