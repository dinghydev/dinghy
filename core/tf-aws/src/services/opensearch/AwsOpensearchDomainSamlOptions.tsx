import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/opensearch_domain_saml_options

export function AwsOpensearchDomainSamlOptions(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_opensearch_domain_saml_options'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsOpensearchDomainSamlOptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsOpensearchDomainSamlOptions,
    idFilter,
    baseNode,
    optional,
  )
