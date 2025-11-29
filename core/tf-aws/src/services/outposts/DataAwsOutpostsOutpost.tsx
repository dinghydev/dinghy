import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/outposts_outpost

export const InputSchema = z.object({
  arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  owner_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  availability_zone: z.string().optional(),
  availability_zone_id: z.string().optional(),
  description: z.string().optional(),
  lifecycle_status: z.string().optional(),
  site_arn: z.string().optional(),
  site_id: z.string().optional(),
  supported_hardware_type: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsOutpostsOutpost(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_outposts_outpost'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOutpostsOutpost = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsOutpostsOutpost, node, id)

export const useDataAwsOutpostsOutposts = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsOutpostsOutpost, node, id)
