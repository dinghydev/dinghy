import {
  camelCaseToWords,
  extendStyle,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { ROUTE_53 } from '@dinghy/diagrams/entitiesAwsNetworkContentDelivery'

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  comment: resolvableValue(z.string().optional()),
  delegation_set_id: resolvableValue(z.string().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc: resolvableValue(
    z.object({
      vpc_id: z.string(),
      vpc_region: z.string().optional(),
    }).array().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  name_servers: z.string().array().optional(),
  primary_name_server: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  zone_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/route53_zone

export function AwsRoute53Zone(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_zone'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
      _style={extendStyle(props, ROUTE_53)}
    />
  )
}

export const useAwsRoute53Zone = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsRoute53Zone, idFilter, baseNode, optional)

export const useAwsRoute53Zones = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsRoute53Zone, idFilter, baseNode, optional)
