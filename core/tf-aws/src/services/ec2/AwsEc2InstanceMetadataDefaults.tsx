import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsEc2InstanceMetadataDefaultsInputSchema = TfMetaSchema.extend({
  http_endpoint: resolvableValue(z.string().optional()),
  http_put_response_hop_limit: resolvableValue(z.number().optional()),
  http_tokens: resolvableValue(z.string().optional()),
  instance_metadata_tags: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEc2InstanceMetadataDefaultsOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsEc2InstanceMetadataDefaultsInputProps =
  & z.input<typeof AwsEc2InstanceMetadataDefaultsInputSchema>
  & NodeProps

export type AwsEc2InstanceMetadataDefaultsOutputProps =
  & z.output<typeof AwsEc2InstanceMetadataDefaultsOutputSchema>
  & z.output<typeof AwsEc2InstanceMetadataDefaultsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_instance_metadata_defaults

export function AwsEc2InstanceMetadataDefaults(
  props: Partial<AwsEc2InstanceMetadataDefaultsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_instance_metadata_defaults'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2InstanceMetadataDefaultsInputSchema}
      _outputSchema={AwsEc2InstanceMetadataDefaultsOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2InstanceMetadataDefaultss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2InstanceMetadataDefaultsOutputProps>(
    AwsEc2InstanceMetadataDefaults,
    idFilter,
    baseNode,
    optional,
  )
