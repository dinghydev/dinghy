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

export const AwsRoute53ResolverConfigInputSchema = TfMetaSchema.extend({
  autodefined_reverse_flag: resolvableValue(z.string()),
  resource_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsRoute53ResolverConfigOutputSchema = z.object({
  id: z.string().optional(),
  owner_id: z.string().optional(),
})

export type AwsRoute53ResolverConfigInputProps =
  & z.input<typeof AwsRoute53ResolverConfigInputSchema>
  & NodeProps

export type AwsRoute53ResolverConfigOutputProps =
  & z.output<typeof AwsRoute53ResolverConfigOutputSchema>
  & z.output<typeof AwsRoute53ResolverConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_resolver_config

export function AwsRoute53ResolverConfig(
  props: Partial<AwsRoute53ResolverConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_resolver_config'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53ResolverConfigInputSchema}
      _outputSchema={AwsRoute53ResolverConfigOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53ResolverConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53ResolverConfigOutputProps>(
    AwsRoute53ResolverConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53ResolverConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53ResolverConfigOutputProps>(
    AwsRoute53ResolverConfig,
    idFilter,
    baseNode,
    optional,
  )
