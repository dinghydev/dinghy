import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/opensearch_vpc_endpoint

export const InputSchema = z.object({
  domain_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc_options: resolvableValue(z.object({
    availability_zones: z.string().array(),
    security_group_ids: z.string().array().optional(),
    subnet_ids: z.string().array(),
    vpc_id: z.string(),
  })),
})

export const OutputSchema = z.object({
  endpoint: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsOpensearchVpcEndpoint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_opensearch_vpc_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsOpensearchVpcEndpoint = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsOpensearchVpcEndpoint, node, id)

export const useAwsOpensearchVpcEndpoints = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsOpensearchVpcEndpoint, node, id)
