import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRoute53Zone } from './AwsRoute53Zone.tsx'

export const DataAwsRoute53ZoneInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  private_zone: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  vpc_id: resolvableValue(z.string().optional()),
  zone_id: resolvableValue(z.string().optional()),
})

export const DataAwsRoute53ZoneOutputSchema = z.object({
  arn: z.string().optional(),
  caller_reference: z.string().optional(),
  comment: z.string().optional(),
  enable_accelerated_recovery: z.boolean().optional(),
  linked_service_description: z.string().optional(),
  linked_service_principal: z.string().optional(),
  name: z.string().optional(),
  name_servers: z.string().array().optional(),
  primary_name_server: z.string().optional(),
  private_zone: z.boolean().optional(),
  resource_record_set_count: z.number().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  zone_id: z.string().optional(),
})

export type DataAwsRoute53ZoneInputProps =
  & z.input<typeof DataAwsRoute53ZoneInputSchema>
  & NodeProps

export type DataAwsRoute53ZoneOutputProps =
  & z.output<typeof DataAwsRoute53ZoneOutputSchema>
  & z.output<typeof DataAwsRoute53ZoneInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/route53_zone

export function DataAwsRoute53Zone(
  props: Partial<DataAwsRoute53ZoneInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsRoute53Zone
      _type='aws_route53_zone'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRoute53ZoneInputSchema}
      _outputSchema={DataAwsRoute53ZoneOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRoute53Zone = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsRoute53ZoneOutputProps>(
    DataAwsRoute53Zone,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsRoute53Zones = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRoute53ZoneOutputProps>(
    DataAwsRoute53Zone,
    idFilter,
    baseNode,
    optional,
  )
