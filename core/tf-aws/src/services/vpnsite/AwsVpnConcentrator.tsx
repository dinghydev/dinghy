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

export const AwsVpnConcentratorInputSchema = TfMetaSchema.extend({
  transit_gateway_id: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsVpnConcentratorOutputSchema = z.object({
  tags_all: z.record(z.string(), z.string()).optional(),
  transit_gateway_attachment_id: z.string().optional(),
  vpn_concentrator_id: z.string().optional(),
})

export type AwsVpnConcentratorInputProps =
  & z.input<typeof AwsVpnConcentratorInputSchema>
  & NodeProps

export type AwsVpnConcentratorOutputProps =
  & z.output<typeof AwsVpnConcentratorOutputSchema>
  & z.output<typeof AwsVpnConcentratorInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpn_concentrator

export function AwsVpnConcentrator(
  props: Partial<AwsVpnConcentratorInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpn_concentrator'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpnConcentratorInputSchema}
      _outputSchema={AwsVpnConcentratorOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpnConcentrator = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpnConcentratorOutputProps>(
    AwsVpnConcentrator,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpnConcentrators = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpnConcentratorOutputProps>(
    AwsVpnConcentrator,
    idFilter,
    baseNode,
    optional,
  )
