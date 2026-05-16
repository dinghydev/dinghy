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

export const AwsLightsailLbInputSchema = TfMetaSchema.extend({
  instance_port: resolvableValue(z.number()),
  name: resolvableValue(z.string()),
  health_check_path: resolvableValue(z.string().optional()),
  ip_address_type: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsLightsailLbOutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  dns_name: z.string().optional(),
  id: z.string().optional(),
  protocol: z.string().optional(),
  public_ports: z.number().array().optional(),
  support_code: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsLightsailLbInputProps =
  & z.input<typeof AwsLightsailLbInputSchema>
  & NodeProps

export type AwsLightsailLbOutputProps =
  & z.output<typeof AwsLightsailLbOutputSchema>
  & z.output<typeof AwsLightsailLbInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lightsail_lb

export function AwsLightsailLb(props: Partial<AwsLightsailLbInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_lb'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLightsailLbInputSchema}
      _outputSchema={AwsLightsailLbOutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailLb = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLightsailLbOutputProps>(
    AwsLightsailLb,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLightsailLbs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLightsailLbOutputProps>(
    AwsLightsailLb,
    idFilter,
    baseNode,
    optional,
  )
