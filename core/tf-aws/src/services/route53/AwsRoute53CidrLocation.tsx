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

export const AwsRoute53CidrLocationInputSchema = TfMetaSchema.extend({
  cidr_blocks: resolvableValue(z.string().array()),
  cidr_collection_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
})

export const AwsRoute53CidrLocationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsRoute53CidrLocationInputProps =
  & z.input<typeof AwsRoute53CidrLocationInputSchema>
  & NodeProps

export type AwsRoute53CidrLocationOutputProps =
  & z.output<typeof AwsRoute53CidrLocationOutputSchema>
  & z.output<typeof AwsRoute53CidrLocationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_cidr_location

export function AwsRoute53CidrLocation(
  props: Partial<AwsRoute53CidrLocationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_cidr_location'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53CidrLocationInputSchema}
      _outputSchema={AwsRoute53CidrLocationOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53CidrLocation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53CidrLocationOutputProps>(
    AwsRoute53CidrLocation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53CidrLocations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53CidrLocationOutputProps>(
    AwsRoute53CidrLocation,
    idFilter,
    baseNode,
    optional,
  )
