import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ip_ranges

export const InputSchema = z.object({
  services: resolvableValue(z.string().array()),
  id: resolvableValue(z.string().optional()),
  regions: resolvableValue(z.string().array().optional()),
  url: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  cidr_blocks: z.string().array().optional(),
  create_date: z.string().optional(),
  ipv6_cidr_blocks: z.string().array().optional(),
  sync_token: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsIpRanges(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ip_ranges'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsIpRangess = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsIpRanges, node, id)
