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

export const InputSchema = z.object({
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  private_zone: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  vpc_id: resolvableValue(z.string().optional()),
  zone_id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  caller_reference: z.string().optional(),
  comment: z.string().optional(),
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/route53_zone

export function DataAwsRoute53Zone(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsRoute53Zone
      _type='aws_route53_zone'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRoute53Zone = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsRoute53Zone, idFilter, baseNode, optional)

export const useDataAwsRoute53Zones = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(DataAwsRoute53Zone, idFilter, baseNode, optional)
