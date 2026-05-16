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

export const AwsRoute53HostedZoneDnssecInputSchema = TfMetaSchema.extend({
  hosted_zone_id: resolvableValue(z.string()),
  signing_status: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsRoute53HostedZoneDnssecOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsRoute53HostedZoneDnssecInputProps =
  & z.input<typeof AwsRoute53HostedZoneDnssecInputSchema>
  & NodeProps

export type AwsRoute53HostedZoneDnssecOutputProps =
  & z.output<typeof AwsRoute53HostedZoneDnssecOutputSchema>
  & z.output<typeof AwsRoute53HostedZoneDnssecInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_hosted_zone_dnssec

export function AwsRoute53HostedZoneDnssec(
  props: Partial<AwsRoute53HostedZoneDnssecInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_hosted_zone_dnssec'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53HostedZoneDnssecInputSchema}
      _outputSchema={AwsRoute53HostedZoneDnssecOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53HostedZoneDnssec = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53HostedZoneDnssecOutputProps>(
    AwsRoute53HostedZoneDnssec,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53HostedZoneDnssecs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53HostedZoneDnssecOutputProps>(
    AwsRoute53HostedZoneDnssec,
    idFilter,
    baseNode,
    optional,
  )
