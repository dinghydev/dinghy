import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsSsoadminInstanceAccessControlAttributesInputSchema =
  TfMetaSchema.extend({
    attribute: resolvableValue(
      z.object({
        key: z.string(),
        value: z.object({
          source: z.string().array(),
        }).array(),
      }).array(),
    ),
    instance_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsSsoadminInstanceAccessControlAttributesOutputSchema = z.object({
  id: z.string().optional(),
  status: z.string().optional(),
  status_reason: z.string().optional(),
})

export type AwsSsoadminInstanceAccessControlAttributesInputProps =
  & z.input<typeof AwsSsoadminInstanceAccessControlAttributesInputSchema>
  & NodeProps

export type AwsSsoadminInstanceAccessControlAttributesOutputProps =
  & z.output<typeof AwsSsoadminInstanceAccessControlAttributesOutputSchema>
  & z.output<typeof AwsSsoadminInstanceAccessControlAttributesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssoadmin_instance_access_control_attributes

export function AwsSsoadminInstanceAccessControlAttributes(
  props: Partial<AwsSsoadminInstanceAccessControlAttributesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_instance_access_control_attributes'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsoadminInstanceAccessControlAttributesInputSchema}
      _outputSchema={AwsSsoadminInstanceAccessControlAttributesOutputSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminInstanceAccessControlAttributess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsoadminInstanceAccessControlAttributesOutputProps>(
    AwsSsoadminInstanceAccessControlAttributes,
    idFilter,
    baseNode,
    optional,
  )
