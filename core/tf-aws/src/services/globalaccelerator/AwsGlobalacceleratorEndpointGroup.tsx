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
  listener_arn: resolvableValue(z.string()),
  endpoint_configuration: resolvableValue(
    z.object({
      attachment_arn: z.string().optional(),
      client_ip_preservation_enabled: z.boolean().optional(),
      endpoint_id: z.string().optional(),
      weight: z.number().optional(),
    }).array().optional(),
  ),
  endpoint_group_region: resolvableValue(z.string().optional()),
  health_check_interval_seconds: resolvableValue(z.number().optional()),
  health_check_path: resolvableValue(z.string().optional()),
  health_check_port: resolvableValue(z.number().optional()),
  health_check_protocol: resolvableValue(z.string().optional()),
  port_override: resolvableValue(
    z.object({
      endpoint_port: z.number(),
      listener_port: z.number(),
    }).array().optional(),
  ),
  threshold_count: resolvableValue(z.number().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  traffic_dial_percentage: resolvableValue(z.number().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_endpoint_group

export function AwsGlobalacceleratorEndpointGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_globalaccelerator_endpoint_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsGlobalacceleratorEndpointGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsGlobalacceleratorEndpointGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGlobalacceleratorEndpointGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsGlobalacceleratorEndpointGroup,
    idFilter,
    baseNode,
    optional,
  )
