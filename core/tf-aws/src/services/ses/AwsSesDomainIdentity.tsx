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

export const AwsSesDomainIdentityInputSchema = TfMetaSchema.extend({
  domain: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSesDomainIdentityOutputSchema = z.object({
  arn: z.string().optional(),
  verification_token: z.string().optional(),
})

export type AwsSesDomainIdentityInputProps =
  & z.input<typeof AwsSesDomainIdentityInputSchema>
  & NodeProps

export type AwsSesDomainIdentityOutputProps =
  & z.output<typeof AwsSesDomainIdentityOutputSchema>
  & z.output<typeof AwsSesDomainIdentityInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ses_domain_identity

export function AwsSesDomainIdentity(
  props: Partial<AwsSesDomainIdentityInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ses_domain_identity'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesDomainIdentityInputSchema}
      _outputSchema={AwsSesDomainIdentityOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesDomainIdentity = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSesDomainIdentityOutputProps>(
    AwsSesDomainIdentity,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesDomainIdentitys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesDomainIdentityOutputProps>(
    AwsSesDomainIdentity,
    idFilter,
    baseNode,
    optional,
  )
