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

export const AwsGlobalacceleratorCrossAccountAttachmentInputSchema =
  TfMetaSchema.extend({
    name: resolvableValue(z.string()),
    principals: resolvableValue(z.string().array().optional()),
    resource: resolvableValue(
      z.object({
        cidr_block: z.string().optional(),
        endpoint_id: z.string().optional(),
        region: z.string().optional(),
      }).array().optional(),
    ),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsGlobalacceleratorCrossAccountAttachmentOutputSchema = z.object({
  arn: z.string().optional(),
  created_time: z.string().optional(),
  id: z.string().optional(),
  last_modified_time: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsGlobalacceleratorCrossAccountAttachmentImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsGlobalacceleratorCrossAccountAttachmentInputProps =
  & z.input<typeof AwsGlobalacceleratorCrossAccountAttachmentInputSchema>
  & z.input<typeof AwsGlobalacceleratorCrossAccountAttachmentImportSchema>
  & NodeProps

export type AwsGlobalacceleratorCrossAccountAttachmentOutputProps =
  & z.output<typeof AwsGlobalacceleratorCrossAccountAttachmentOutputSchema>
  & z.output<typeof AwsGlobalacceleratorCrossAccountAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/globalaccelerator_cross_account_attachment

export function AwsGlobalacceleratorCrossAccountAttachment(
  props: Partial<AwsGlobalacceleratorCrossAccountAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_globalaccelerator_cross_account_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGlobalacceleratorCrossAccountAttachmentInputSchema}
      _outputSchema={AwsGlobalacceleratorCrossAccountAttachmentOutputSchema}
      _importSchema={AwsGlobalacceleratorCrossAccountAttachmentImportSchema}
      {...props}
    />
  )
}

export const useAwsGlobalacceleratorCrossAccountAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGlobalacceleratorCrossAccountAttachmentOutputProps>(
    AwsGlobalacceleratorCrossAccountAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGlobalacceleratorCrossAccountAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGlobalacceleratorCrossAccountAttachmentOutputProps>(
    AwsGlobalacceleratorCrossAccountAttachment,
    idFilter,
    baseNode,
    optional,
  )
