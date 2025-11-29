import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_instance_metadata_defaults

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  http_endpoint: resolvableValue(z.string().optional()),
  http_put_response_hop_limit: resolvableValue(z.number().optional()),
  http_tokens: resolvableValue(z.string().optional()),
  instance_metadata_tags: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEc2InstanceMetadataDefaults(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_instance_metadata_defaults'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2InstanceMetadataDefaultss = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEc2InstanceMetadataDefaults, node, id)
