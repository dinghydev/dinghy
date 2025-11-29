import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3outposts_endpoint

export const InputSchema = z.object({
  outpost_id: resolvableValue(z.string()),
  security_group_id: resolvableValue(z.string()),
  subnet_id: resolvableValue(z.string()),
  access_type: resolvableValue(z.string().optional()),
  customer_owned_ipv4_pool: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  cidr_block: z.string().optional(),
  creation_time: z.string().optional(),
  id: z.string().optional(),
  network_interfaces: z.object({
    network_interface_id: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsS3outpostsEndpoint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3outposts_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3outpostsEndpoint = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsS3outpostsEndpoint, node, id)

export const useAwsS3outpostsEndpoints = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsS3outpostsEndpoint, node, id)
