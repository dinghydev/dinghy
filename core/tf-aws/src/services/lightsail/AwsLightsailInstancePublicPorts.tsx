import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lightsail_instance_public_ports

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLightsailInstancePublicPorts(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_instance_public_ports'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailInstancePublicPortss = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLightsailInstancePublicPorts, node, id)
