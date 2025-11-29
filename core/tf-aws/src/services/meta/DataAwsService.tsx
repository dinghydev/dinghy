import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/service

export const InputSchema = z.object({
  partition: resolvableValue(z.string()),
  dns_name: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  reverse_dns_name: resolvableValue(z.string().optional()),
  reverse_dns_prefix: resolvableValue(z.string().optional()),
  service_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  supported: z.boolean().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsService(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_service'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsService = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsService, node, id)

export const useDataAwsServices = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsService, node, id)
