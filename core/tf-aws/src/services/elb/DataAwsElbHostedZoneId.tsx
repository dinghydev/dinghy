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

export const DataAwsElbHostedZoneIdInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
})

export const DataAwsElbHostedZoneIdOutputSchema = z.object({
  id: z.string().optional(),
})

export type DataAwsElbHostedZoneIdInputProps =
  & z.input<typeof DataAwsElbHostedZoneIdInputSchema>
  & NodeProps

export type DataAwsElbHostedZoneIdOutputProps =
  & z.output<typeof DataAwsElbHostedZoneIdOutputSchema>
  & z.output<typeof DataAwsElbHostedZoneIdInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/elb_hosted_zone_id

export function DataAwsElbHostedZoneId(
  props: Partial<DataAwsElbHostedZoneIdInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elb_hosted_zone_id'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsElbHostedZoneIdInputSchema}
      _outputSchema={DataAwsElbHostedZoneIdOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsElbHostedZoneId = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsElbHostedZoneIdOutputProps>(
    DataAwsElbHostedZoneId,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsElbHostedZoneIds = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsElbHostedZoneIdOutputProps>(
    DataAwsElbHostedZoneId,
    idFilter,
    baseNode,
    optional,
  )
