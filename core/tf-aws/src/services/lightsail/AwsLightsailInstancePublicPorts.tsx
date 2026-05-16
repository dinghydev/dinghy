import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsLightsailInstancePublicPortsInputSchema = TfMetaSchema.extend({
  instance_name: resolvableValue(z.string()),
  port_info: resolvableValue(
    z.object({
      cidr_list_aliases: z.string().array().optional(),
      cidrs: z.string().array().optional(),
      from_port: z.number(),
      ipv6_cidrs: z.string().array().optional(),
      protocol: z.string(),
      to_port: z.number(),
    }).array(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const AwsLightsailInstancePublicPortsOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsLightsailInstancePublicPortsInputProps =
  & z.input<typeof AwsLightsailInstancePublicPortsInputSchema>
  & NodeProps

export type AwsLightsailInstancePublicPortsOutputProps =
  & z.output<typeof AwsLightsailInstancePublicPortsOutputSchema>
  & z.output<typeof AwsLightsailInstancePublicPortsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lightsail_instance_public_ports

export function AwsLightsailInstancePublicPorts(
  props: Partial<AwsLightsailInstancePublicPortsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_instance_public_ports'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLightsailInstancePublicPortsInputSchema}
      _outputSchema={AwsLightsailInstancePublicPortsOutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailInstancePublicPortss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLightsailInstancePublicPortsOutputProps>(
    AwsLightsailInstancePublicPorts,
    idFilter,
    baseNode,
    optional,
  )
