import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSesDomainIdentity } from './AwsSesDomainIdentity.tsx'

export const DataAwsSesDomainIdentityInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSesDomainIdentityOutputSchema = z.object({
  arn: z.string().optional(),
  domain: z.string().optional(),
  verification_token: z.string().optional(),
})

export type DataAwsSesDomainIdentityInputProps =
  & z.input<typeof DataAwsSesDomainIdentityInputSchema>
  & NodeProps

export type DataAwsSesDomainIdentityOutputProps =
  & z.output<typeof DataAwsSesDomainIdentityOutputSchema>
  & z.output<typeof DataAwsSesDomainIdentityInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ses_domain_identity

export function DataAwsSesDomainIdentity(
  props: Partial<DataAwsSesDomainIdentityInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSesDomainIdentity
      _type='aws_ses_domain_identity'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSesDomainIdentityInputSchema}
      _outputSchema={DataAwsSesDomainIdentityOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSesDomainIdentity = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSesDomainIdentityOutputProps>(
    DataAwsSesDomainIdentity,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSesDomainIdentitys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSesDomainIdentityOutputProps>(
    DataAwsSesDomainIdentity,
    idFilter,
    baseNode,
    optional,
  )
