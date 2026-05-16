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

export const AwsCloudfrontKeyGroupInputSchema = TfMetaSchema.extend({
  items: resolvableValue(z.string().array()),
  name: resolvableValue(z.string()),
  comment: resolvableValue(z.string().optional()),
})

export const AwsCloudfrontKeyGroupOutputSchema = z.object({
  etag: z.string().optional(),
  id: z.string().optional(),
})

export type AwsCloudfrontKeyGroupInputProps =
  & z.input<typeof AwsCloudfrontKeyGroupInputSchema>
  & NodeProps

export type AwsCloudfrontKeyGroupOutputProps =
  & z.output<typeof AwsCloudfrontKeyGroupOutputSchema>
  & z.output<typeof AwsCloudfrontKeyGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudfront_key_group

export function AwsCloudfrontKeyGroup(
  props: Partial<AwsCloudfrontKeyGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_key_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudfrontKeyGroupInputSchema}
      _outputSchema={AwsCloudfrontKeyGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontKeyGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudfrontKeyGroupOutputProps>(
    AwsCloudfrontKeyGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudfrontKeyGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudfrontKeyGroupOutputProps>(
    AwsCloudfrontKeyGroup,
    idFilter,
    baseNode,
    optional,
  )
