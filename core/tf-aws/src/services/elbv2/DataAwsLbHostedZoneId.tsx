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

export const DataAwsLbHostedZoneIdInputSchema = TfMetaSchema.extend({
  load_balancer_type: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsLbHostedZoneIdOutputSchema = z.object({
  id: z.string().optional(),
})

export type DataAwsLbHostedZoneIdInputProps =
  & z.input<typeof DataAwsLbHostedZoneIdInputSchema>
  & NodeProps

export type DataAwsLbHostedZoneIdOutputProps =
  & z.output<typeof DataAwsLbHostedZoneIdOutputSchema>
  & z.output<typeof DataAwsLbHostedZoneIdInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/lb_hosted_zone_id

export function DataAwsLbHostedZoneId(
  props: Partial<DataAwsLbHostedZoneIdInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lb_hosted_zone_id'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsLbHostedZoneIdInputSchema}
      _outputSchema={DataAwsLbHostedZoneIdOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsLbHostedZoneId = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsLbHostedZoneIdOutputProps>(
    DataAwsLbHostedZoneId,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsLbHostedZoneIds = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsLbHostedZoneIdOutputProps>(
    DataAwsLbHostedZoneId,
    idFilter,
    baseNode,
    optional,
  )
