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
  aws_region: resolvableValue(z.string()),
  endpoints: resolvableValue(z.object({
    lambda_arn: z.string(),
  })),
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/chimesdkvoice_sip_media_application

export function AwsChimesdkvoiceSipMediaApplication(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chimesdkvoice_sip_media_application'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsChimesdkvoiceSipMediaApplication = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    AwsChimesdkvoiceSipMediaApplication,
    idFilter,
    baseNode,
  )

export const useAwsChimesdkvoiceSipMediaApplications = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    AwsChimesdkvoiceSipMediaApplication,
    idFilter,
    baseNode,
  )
