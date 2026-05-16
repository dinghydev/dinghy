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

export const AwsLightsailStaticIpInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsLightsailStaticIpOutputSchema = z.object({
  arn: z.string().optional(),
  ip_address: z.string().optional(),
  support_code: z.string().optional(),
})

export type AwsLightsailStaticIpInputProps =
  & z.input<typeof AwsLightsailStaticIpInputSchema>
  & NodeProps

export type AwsLightsailStaticIpOutputProps =
  & z.output<typeof AwsLightsailStaticIpOutputSchema>
  & z.output<typeof AwsLightsailStaticIpInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lightsail_static_ip

export function AwsLightsailStaticIp(
  props: Partial<AwsLightsailStaticIpInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_static_ip'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLightsailStaticIpInputSchema}
      _outputSchema={AwsLightsailStaticIpOutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailStaticIp = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLightsailStaticIpOutputProps>(
    AwsLightsailStaticIp,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLightsailStaticIps = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLightsailStaticIpOutputProps>(
    AwsLightsailStaticIp,
    idFilter,
    baseNode,
    optional,
  )
