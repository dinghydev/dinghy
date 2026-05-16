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

export const AwsSesDomainMailFromInputSchema = TfMetaSchema.extend({
  domain: resolvableValue(z.string()),
  mail_from_domain: resolvableValue(z.string()),
  behavior_on_mx_failure: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSesDomainMailFromOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsSesDomainMailFromInputProps =
  & z.input<typeof AwsSesDomainMailFromInputSchema>
  & NodeProps

export type AwsSesDomainMailFromOutputProps =
  & z.output<typeof AwsSesDomainMailFromOutputSchema>
  & z.output<typeof AwsSesDomainMailFromInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ses_domain_mail_from

export function AwsSesDomainMailFrom(
  props: Partial<AwsSesDomainMailFromInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ses_domain_mail_from'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesDomainMailFromInputSchema}
      _outputSchema={AwsSesDomainMailFromOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesDomainMailFrom = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSesDomainMailFromOutputProps>(
    AwsSesDomainMailFrom,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesDomainMailFroms = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesDomainMailFromOutputProps>(
    AwsSesDomainMailFrom,
    idFilter,
    baseNode,
    optional,
  )
