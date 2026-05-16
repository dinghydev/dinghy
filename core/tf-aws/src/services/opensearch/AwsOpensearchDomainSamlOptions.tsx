import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsOpensearchDomainSamlOptionsInputSchema = TfMetaSchema.extend({
  domain_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  saml_options: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
      master_backend_role: z.string().optional(),
      master_user_name: z.string().optional(),
      roles_key: z.string().optional(),
      session_timeout_minutes: z.number().optional(),
      subject_key: z.string().optional(),
      idp: z.object({
        entity_id: z.string(),
        metadata_content: z.string(),
      }).optional(),
    }).optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsOpensearchDomainSamlOptionsOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsOpensearchDomainSamlOptionsInputProps =
  & z.input<typeof AwsOpensearchDomainSamlOptionsInputSchema>
  & NodeProps

export type AwsOpensearchDomainSamlOptionsOutputProps =
  & z.output<typeof AwsOpensearchDomainSamlOptionsOutputSchema>
  & z.output<typeof AwsOpensearchDomainSamlOptionsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearch_domain_saml_options

export function AwsOpensearchDomainSamlOptions(
  props: Partial<AwsOpensearchDomainSamlOptionsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_opensearch_domain_saml_options'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOpensearchDomainSamlOptionsInputSchema}
      _outputSchema={AwsOpensearchDomainSamlOptionsOutputSchema}
      {...props}
    />
  )
}

export const useAwsOpensearchDomainSamlOptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOpensearchDomainSamlOptionsOutputProps>(
    AwsOpensearchDomainSamlOptions,
    idFilter,
    baseNode,
    optional,
  )
