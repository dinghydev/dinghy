import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMedialiveInput } from './AwsMedialiveInput.tsx'

export const DataAwsMedialiveInputInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsMedialiveInputOutputSchema = z.object({
  arn: z.string().optional(),
  attached_channels: z.string().array().optional(),
  destinations: z.object({
    ip: z.string(),
    port: z.string(),
    url: z.string(),
    vpc: z.object({
      availability_zone: z.string(),
      network_interface_id: z.string(),
    }).array(),
  }).array().optional(),
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

export type DataAwsMedialiveInputInputProps =
  & z.input<typeof DataAwsMedialiveInputInputSchema>
  & NodeProps

export type DataAwsMedialiveInputOutputProps =
  & z.output<typeof DataAwsMedialiveInputOutputSchema>
  & z.output<typeof DataAwsMedialiveInputInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/medialive_input

export function DataAwsMedialiveInput(
  props: Partial<DataAwsMedialiveInputInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsMedialiveInput
      _type='aws_medialive_input'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsMedialiveInputInputSchema}
      _outputSchema={DataAwsMedialiveInputOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMedialiveInput = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsMedialiveInputOutputProps>(
    DataAwsMedialiveInput,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsMedialiveInputs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsMedialiveInputOutputProps>(
    DataAwsMedialiveInput,
    idFilter,
    baseNode,
    optional,
  )
