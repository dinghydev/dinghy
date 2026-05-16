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

export const AwsWorkmailDefaultDomainInputSchema = TfMetaSchema.extend({
  domain_name: resolvableValue(z.string()),
  organization_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsWorkmailDefaultDomainOutputSchema = z.object({})

export const AwsWorkmailDefaultDomainImportSchema = z.object({
  organization_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsWorkmailDefaultDomainInputProps =
  & z.input<typeof AwsWorkmailDefaultDomainInputSchema>
  & z.input<typeof AwsWorkmailDefaultDomainImportSchema>
  & NodeProps

export type AwsWorkmailDefaultDomainOutputProps =
  & z.output<typeof AwsWorkmailDefaultDomainOutputSchema>
  & z.output<typeof AwsWorkmailDefaultDomainInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/workmail_default_domain

export function AwsWorkmailDefaultDomain(
  props: Partial<AwsWorkmailDefaultDomainInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workmail_default_domain'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWorkmailDefaultDomainInputSchema}
      _outputSchema={AwsWorkmailDefaultDomainOutputSchema}
      _importSchema={AwsWorkmailDefaultDomainImportSchema}
      {...props}
    />
  )
}

export const useAwsWorkmailDefaultDomain = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWorkmailDefaultDomainOutputProps>(
    AwsWorkmailDefaultDomain,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWorkmailDefaultDomains = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWorkmailDefaultDomainOutputProps>(
    AwsWorkmailDefaultDomain,
    idFilter,
    baseNode,
    optional,
  )
