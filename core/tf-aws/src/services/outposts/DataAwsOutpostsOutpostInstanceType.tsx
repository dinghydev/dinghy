import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/outposts_outpost_instance_type

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  instance_type: resolvableValue(z.string().optional()),
  preferred_instance_types: resolvableValue(z.string().array().optional()),
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

export function DataAwsOutpostsOutpostInstanceType(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_outposts_outpost_instance_type'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOutpostsOutpostInstanceType = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsOutpostsOutpostInstanceType, node, id)

export const useDataAwsOutpostsOutpostInstanceTypes = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsOutpostsOutpostInstanceType, node, id)
