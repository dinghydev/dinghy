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

export const AwsWorkmailDomainInputSchema = TfMetaSchema.extend({
  domain_name: resolvableValue(z.string()),
  organization_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsWorkmailDomainOutputSchema = z.object({
  dkim_verification_status: z.string().optional(),
  is_default: z.boolean().optional(),
  is_test_domain: z.boolean().optional(),
  ownership_verification_status: z.string().optional(),
  records: z.object({
    hostname: z.string(),
    type: z.string(),
    value: z.string(),
  }).array().optional(),
})

export const AwsWorkmailDomainImportSchema = z.object({
  domain_name: resolvableValue(z.string()),
  organization_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsWorkmailDomainInputProps =
  & z.input<typeof AwsWorkmailDomainInputSchema>
  & z.input<typeof AwsWorkmailDomainImportSchema>
  & NodeProps

export type AwsWorkmailDomainOutputProps =
  & z.output<typeof AwsWorkmailDomainOutputSchema>
  & z.output<typeof AwsWorkmailDomainInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/workmail_domain

export function AwsWorkmailDomain(props: Partial<AwsWorkmailDomainInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workmail_domain'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWorkmailDomainInputSchema}
      _outputSchema={AwsWorkmailDomainOutputSchema}
      _importSchema={AwsWorkmailDomainImportSchema}
      {...props}
    />
  )
}

export const useAwsWorkmailDomain = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWorkmailDomainOutputProps>(
    AwsWorkmailDomain,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWorkmailDomains = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWorkmailDomainOutputProps>(
    AwsWorkmailDomain,
    idFilter,
    baseNode,
    optional,
  )
