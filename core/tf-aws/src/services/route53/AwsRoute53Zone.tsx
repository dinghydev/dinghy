import {
  camelCaseToWords,
  extendStyle,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { ROUTE_53 } from '@dinghy/diagrams/entitiesAwsNetworkContentDelivery'

export const AwsRoute53ZoneInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  comment: resolvableValue(z.string().optional()),
  delegation_set_id: resolvableValue(z.string().optional()),
  enable_accelerated_recovery: resolvableValue(z.boolean().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc: resolvableValue(
    z.object({
      vpc_id: z.string(),
      vpc_region: z.string().optional(),
    }).array().optional(),
  ),
})

export const AwsRoute53ZoneOutputSchema = z.object({
  arn: z.string().optional(),
  name_servers: z.string().array().optional(),
  primary_name_server: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  zone_id: z.string().optional(),
})

export const AwsRoute53ZoneImportSchema = z.object({
  zone_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type AwsRoute53ZoneInputProps =
  & z.input<typeof AwsRoute53ZoneInputSchema>
  & z.input<typeof AwsRoute53ZoneImportSchema>
  & NodeProps

export type AwsRoute53ZoneOutputProps =
  & z.output<typeof AwsRoute53ZoneOutputSchema>
  & z.output<typeof AwsRoute53ZoneInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_zone

export function AwsRoute53Zone(props: Partial<AwsRoute53ZoneInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_zone'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53ZoneInputSchema}
      _outputSchema={AwsRoute53ZoneOutputSchema}
      _importSchema={AwsRoute53ZoneImportSchema}
      {...props}
      _style={extendStyle(props, ROUTE_53)}
    />
  )
}

export const useAwsRoute53Zone = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53ZoneOutputProps>(
    AwsRoute53Zone,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53Zones = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53ZoneOutputProps>(
    AwsRoute53Zone,
    idFilter,
    baseNode,
    optional,
  )
