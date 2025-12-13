import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  cidr_blocks: resolvableValue(z.string().array()),
  cidr_collection_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/route53_cidr_location

export function AwsRoute53CidrLocation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_cidr_location'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53CidrLocation = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsRoute53CidrLocation, idFilter, baseNode)

export const useAwsRoute53CidrLocations = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsRoute53CidrLocation, idFilter, baseNode)
