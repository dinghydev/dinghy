import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/networkmanager_link

export const InputSchema = z.object({
  global_network_id: resolvableValue(z.string()),
  site_id: resolvableValue(z.string()),
  bandwidth: resolvableValue(z.object({
    download_speed: z.number().optional(),
    upload_speed: z.number().optional(),
  })),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  provider_name: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  type: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsNetworkmanagerLink(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_link'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerLink = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsNetworkmanagerLink, node, id)

export const useAwsNetworkmanagerLinks = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsNetworkmanagerLink, node, id)
