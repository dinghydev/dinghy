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

export const AwsRoute53ResolverDnssecConfigInputSchema = TfMetaSchema.extend({
  resource_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsRoute53ResolverDnssecConfigOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  validation_status: z.string().optional(),
})

export type AwsRoute53ResolverDnssecConfigInputProps =
  & z.input<typeof AwsRoute53ResolverDnssecConfigInputSchema>
  & NodeProps

export type AwsRoute53ResolverDnssecConfigOutputProps =
  & z.output<typeof AwsRoute53ResolverDnssecConfigOutputSchema>
  & z.output<typeof AwsRoute53ResolverDnssecConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_resolver_dnssec_config

export function AwsRoute53ResolverDnssecConfig(
  props: Partial<AwsRoute53ResolverDnssecConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_resolver_dnssec_config'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53ResolverDnssecConfigInputSchema}
      _outputSchema={AwsRoute53ResolverDnssecConfigOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53ResolverDnssecConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53ResolverDnssecConfigOutputProps>(
    AwsRoute53ResolverDnssecConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53ResolverDnssecConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53ResolverDnssecConfigOutputProps>(
    AwsRoute53ResolverDnssecConfig,
    idFilter,
    baseNode,
    optional,
  )
