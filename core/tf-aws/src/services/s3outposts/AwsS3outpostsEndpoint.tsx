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

export const AwsS3outpostsEndpointInputSchema = TfMetaSchema.extend({
  outpost_id: resolvableValue(z.string()),
  security_group_id: resolvableValue(z.string()),
  subnet_id: resolvableValue(z.string()),
  access_type: resolvableValue(z.string().optional()),
  customer_owned_ipv4_pool: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsS3outpostsEndpointOutputSchema = z.object({
  arn: z.string().optional(),
  cidr_block: z.string().optional(),
  creation_time: z.string().optional(),
  id: z.string().optional(),
  network_interfaces: z.set(z.object({
    network_interface_id: z.string(),
  })).optional(),
})

export type AwsS3outpostsEndpointInputProps =
  & z.input<typeof AwsS3outpostsEndpointInputSchema>
  & NodeProps

export type AwsS3outpostsEndpointOutputProps =
  & z.output<typeof AwsS3outpostsEndpointOutputSchema>
  & z.output<typeof AwsS3outpostsEndpointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3outposts_endpoint

export function AwsS3outpostsEndpoint(
  props: Partial<AwsS3outpostsEndpointInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3outposts_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3outpostsEndpointInputSchema}
      _outputSchema={AwsS3outpostsEndpointOutputSchema}
      {...props}
    />
  )
}

export const useAwsS3outpostsEndpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3outpostsEndpointOutputProps>(
    AwsS3outpostsEndpoint,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3outpostsEndpoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3outpostsEndpointOutputProps>(
    AwsS3outpostsEndpoint,
    idFilter,
    baseNode,
    optional,
  )
