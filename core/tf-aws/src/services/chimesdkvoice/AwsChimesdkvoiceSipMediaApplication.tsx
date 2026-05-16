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

export const AwsChimesdkvoiceSipMediaApplicationInputSchema = TfMetaSchema
  .extend({
    aws_region: resolvableValue(z.string()),
    endpoints: resolvableValue(z.object({
      lambda_arn: z.string(),
    })),
    name: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsChimesdkvoiceSipMediaApplicationOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsChimesdkvoiceSipMediaApplicationInputProps =
  & z.input<typeof AwsChimesdkvoiceSipMediaApplicationInputSchema>
  & NodeProps

export type AwsChimesdkvoiceSipMediaApplicationOutputProps =
  & z.output<typeof AwsChimesdkvoiceSipMediaApplicationOutputSchema>
  & z.output<typeof AwsChimesdkvoiceSipMediaApplicationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chimesdkvoice_sip_media_application

export function AwsChimesdkvoiceSipMediaApplication(
  props: Partial<AwsChimesdkvoiceSipMediaApplicationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chimesdkvoice_sip_media_application'
      _category='resource'
      _title={_title}
      _inputSchema={AwsChimesdkvoiceSipMediaApplicationInputSchema}
      _outputSchema={AwsChimesdkvoiceSipMediaApplicationOutputSchema}
      {...props}
    />
  )
}

export const useAwsChimesdkvoiceSipMediaApplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsChimesdkvoiceSipMediaApplicationOutputProps>(
    AwsChimesdkvoiceSipMediaApplication,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsChimesdkvoiceSipMediaApplications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsChimesdkvoiceSipMediaApplicationOutputProps>(
    AwsChimesdkvoiceSipMediaApplication,
    idFilter,
    baseNode,
    optional,
  )
