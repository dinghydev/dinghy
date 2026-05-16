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

export const AwsOpensearchserverlessSecurityConfigInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    type: resolvableValue(z.string()),
    description: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    saml_options: resolvableValue(
      z.object({
        group_attribute: z.string().optional(),
        metadata: z.string(),
        session_timeout: z.number().optional(),
        user_attribute: z.string().optional(),
      }).array().optional(),
    ),
  })

export const AwsOpensearchserverlessSecurityConfigOutputSchema = z.object({
  config_version: z.string().optional(),
  id: z.string().optional(),
})

export const AwsOpensearchserverlessSecurityConfigImportSchema = z.object({
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsOpensearchserverlessSecurityConfigInputProps =
  & z.input<typeof AwsOpensearchserverlessSecurityConfigInputSchema>
  & z.input<typeof AwsOpensearchserverlessSecurityConfigImportSchema>
  & NodeProps

export type AwsOpensearchserverlessSecurityConfigOutputProps =
  & z.output<typeof AwsOpensearchserverlessSecurityConfigOutputSchema>
  & z.output<typeof AwsOpensearchserverlessSecurityConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_security_config

export function AwsOpensearchserverlessSecurityConfig(
  props: Partial<AwsOpensearchserverlessSecurityConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_opensearchserverless_security_config'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOpensearchserverlessSecurityConfigInputSchema}
      _outputSchema={AwsOpensearchserverlessSecurityConfigOutputSchema}
      _importSchema={AwsOpensearchserverlessSecurityConfigImportSchema}
      {...props}
    />
  )
}

export const useAwsOpensearchserverlessSecurityConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOpensearchserverlessSecurityConfigOutputProps>(
    AwsOpensearchserverlessSecurityConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOpensearchserverlessSecurityConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOpensearchserverlessSecurityConfigOutputProps>(
    AwsOpensearchserverlessSecurityConfig,
    idFilter,
    baseNode,
    optional,
  )
