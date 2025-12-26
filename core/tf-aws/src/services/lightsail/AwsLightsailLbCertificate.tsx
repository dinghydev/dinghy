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
  lb_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  domain_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  subject_alternative_names: resolvableValue(z.string().array().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  domain_validation_records: z.set(z.object({
    domain_name: z.string(),
    resource_record_name: z.string(),
    resource_record_type: z.string(),
    resource_record_value: z.string(),
  })).optional(),
  id: z.string().optional(),
  support_code: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lightsail_lb_certificate

export function AwsLightsailLbCertificate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_lb_certificate'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailLbCertificate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsLightsailLbCertificate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLightsailLbCertificates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsLightsailLbCertificate,
    idFilter,
    baseNode,
    optional,
  )
