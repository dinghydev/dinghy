import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMedialiveInput } from './AwsMedialiveInput.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/medialive_input

export const InputSchema = z.object({
  destinations: resolvableValue(
    z.object({
      ip: z.string(),
      port: z.string(),
      url: z.string(),
      vpc: z.object({
        availability_zone: z.string(),
        network_interface_id: z.string(),
      }).array(),
    }).array(),
  ),
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  attached_channels: z.string().array().optional(),
  input_class: z.string().optional(),
  input_devices: z.object({
    id: z.string(),
  }).array().optional(),
  input_partner_ids: z.string().array().optional(),
  input_source_type: z.string().optional(),
  media_connect_flows: z.object({
    flow_arn: z.string(),
  }).array().optional(),
  name: z.string().optional(),
  role_arn: z.string().optional(),
  security_groups: z.string().array().optional(),
  sources: z.object({
    password_param: z.string(),
    url: z.string(),
    username: z.string(),
  }).array().optional(),
  state: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsMedialiveInput(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsMedialiveInput
      _type='aws_medialive_input'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMedialiveInput = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsMedialiveInput, node, id)

export const useDataAwsMedialiveInputs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsMedialiveInput, node, id)
