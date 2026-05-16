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

export const AwsSesDomainDkimInputSchema = TfMetaSchema.extend({
  domain: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSesDomainDkimOutputSchema = z.object({
  dkim_tokens: z.string().array().optional(),
})

export type AwsSesDomainDkimInputProps =
  & z.input<typeof AwsSesDomainDkimInputSchema>
  & NodeProps

export type AwsSesDomainDkimOutputProps =
  & z.output<typeof AwsSesDomainDkimOutputSchema>
  & z.output<typeof AwsSesDomainDkimInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ses_domain_dkim

export function AwsSesDomainDkim(props: Partial<AwsSesDomainDkimInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ses_domain_dkim'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesDomainDkimInputSchema}
      _outputSchema={AwsSesDomainDkimOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesDomainDkim = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSesDomainDkimOutputProps>(
    AwsSesDomainDkim,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesDomainDkims = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesDomainDkimOutputProps>(
    AwsSesDomainDkim,
    idFilter,
    baseNode,
    optional,
  )
