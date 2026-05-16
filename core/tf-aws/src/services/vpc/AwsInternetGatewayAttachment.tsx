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

export const AwsInternetGatewayAttachmentInputSchema = TfMetaSchema.extend({
  internet_gateway_id: resolvableValue(z.string()),
  vpc_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsInternetGatewayAttachmentOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsInternetGatewayAttachmentInputProps =
  & z.input<typeof AwsInternetGatewayAttachmentInputSchema>
  & NodeProps

export type AwsInternetGatewayAttachmentOutputProps =
  & z.output<typeof AwsInternetGatewayAttachmentOutputSchema>
  & z.output<typeof AwsInternetGatewayAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/internet_gateway_attachment

export function AwsInternetGatewayAttachment(
  props: Partial<AwsInternetGatewayAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_internet_gateway_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsInternetGatewayAttachmentInputSchema}
      _outputSchema={AwsInternetGatewayAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsInternetGatewayAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsInternetGatewayAttachmentOutputProps>(
    AwsInternetGatewayAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsInternetGatewayAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsInternetGatewayAttachmentOutputProps>(
    AwsInternetGatewayAttachment,
    idFilter,
    baseNode,
    optional,
  )
