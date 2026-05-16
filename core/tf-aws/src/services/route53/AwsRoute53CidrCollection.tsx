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

export const AwsRoute53CidrCollectionInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
})

export const AwsRoute53CidrCollectionOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  version: z.number().optional(),
})

export type AwsRoute53CidrCollectionInputProps =
  & z.input<typeof AwsRoute53CidrCollectionInputSchema>
  & NodeProps

export type AwsRoute53CidrCollectionOutputProps =
  & z.output<typeof AwsRoute53CidrCollectionOutputSchema>
  & z.output<typeof AwsRoute53CidrCollectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_cidr_collection

export function AwsRoute53CidrCollection(
  props: Partial<AwsRoute53CidrCollectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_cidr_collection'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53CidrCollectionInputSchema}
      _outputSchema={AwsRoute53CidrCollectionOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53CidrCollection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53CidrCollectionOutputProps>(
    AwsRoute53CidrCollection,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53CidrCollections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53CidrCollectionOutputProps>(
    AwsRoute53CidrCollection,
    idFilter,
    baseNode,
    optional,
  )
