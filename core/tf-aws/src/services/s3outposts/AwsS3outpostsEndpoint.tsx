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

export const InputSchema = z.object({
  outpost_id: resolvableValue(z.string()),
  security_group_id: resolvableValue(z.string()),
  subnet_id: resolvableValue(z.string()),
  access_type: resolvableValue(z.string().optional()),
  customer_owned_ipv4_pool: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  cidr_block: z.string().optional(),
  creation_time: z.string().optional(),
  id: z.string().optional(),
  network_interfaces: z.set(z.object({
    network_interface_id: z.string(),
  })).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3outposts_endpoint

export function AwsS3outpostsEndpoint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3outposts_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3outpostsEndpoint = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsS3outpostsEndpoint, idFilter, baseNode)

export const useAwsS3outpostsEndpoints = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsS3outpostsEndpoint, idFilter, baseNode)
