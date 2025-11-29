import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/apprunner_vpc_ingress_connection

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  service_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  ingress_vpc_configuration: resolvableValue(z.object({
    vpc_endpoint_id: z.string().optional(),
    vpc_id: z.string().optional(),
  })),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  domain_name: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
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

export function AwsApprunnerVpcIngressConnection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apprunner_vpc_ingress_connection'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsApprunnerVpcIngressConnection = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsApprunnerVpcIngressConnection, node, id)

export const useAwsApprunnerVpcIngressConnections = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsApprunnerVpcIngressConnection, node, id)
