import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsEc2ImageBlockPublicAccessInputSchema = TfMetaSchema.extend({
  state: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsEc2ImageBlockPublicAccessOutputSchema = z.object({})

export type AwsEc2ImageBlockPublicAccessInputProps =
  & z.input<typeof AwsEc2ImageBlockPublicAccessInputSchema>
  & NodeProps

export type AwsEc2ImageBlockPublicAccessOutputProps =
  & z.output<typeof AwsEc2ImageBlockPublicAccessOutputSchema>
  & z.output<typeof AwsEc2ImageBlockPublicAccessInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_image_block_public_access

export function AwsEc2ImageBlockPublicAccess(
  props: Partial<AwsEc2ImageBlockPublicAccessInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_image_block_public_access'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2ImageBlockPublicAccessInputSchema}
      _outputSchema={AwsEc2ImageBlockPublicAccessOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2ImageBlockPublicAccesss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2ImageBlockPublicAccessOutputProps>(
    AwsEc2ImageBlockPublicAccess,
    idFilter,
    baseNode,
    optional,
  )
