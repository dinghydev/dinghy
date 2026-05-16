import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOpensearchserverlessSecurityConfig } from './AwsOpensearchserverlessSecurityConfig.tsx'

export const DataAwsOpensearchserverlessSecurityConfigInputSchema = TfMetaSchema
  .extend({
    id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsOpensearchserverlessSecurityConfigOutputSchema = z.object({
  config_version: z.string().optional(),
  created_date: z.string().optional(),
  description: z.string().optional(),
  last_modified_date: z.string().optional(),
  saml_options: z.object({
    group_attribute: z.string().optional(),
    metadata: z.string().optional(),
    session_timeout: z.number().optional(),
    user_attribute: z.string().optional(),
  }).array().optional().optional(),
  type: z.string().optional(),
})

export type DataAwsOpensearchserverlessSecurityConfigInputProps =
  & z.input<typeof DataAwsOpensearchserverlessSecurityConfigInputSchema>
  & NodeProps

export type DataAwsOpensearchserverlessSecurityConfigOutputProps =
  & z.output<typeof DataAwsOpensearchserverlessSecurityConfigOutputSchema>
  & z.output<typeof DataAwsOpensearchserverlessSecurityConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/opensearchserverless_security_config

export function DataAwsOpensearchserverlessSecurityConfig(
  props: Partial<DataAwsOpensearchserverlessSecurityConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsOpensearchserverlessSecurityConfig
      _type='aws_opensearchserverless_security_config'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOpensearchserverlessSecurityConfigInputSchema}
      _outputSchema={DataAwsOpensearchserverlessSecurityConfigOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOpensearchserverlessSecurityConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsOpensearchserverlessSecurityConfigOutputProps>(
    DataAwsOpensearchserverlessSecurityConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOpensearchserverlessSecurityConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOpensearchserverlessSecurityConfigOutputProps>(
    DataAwsOpensearchserverlessSecurityConfig,
    idFilter,
    baseNode,
    optional,
  )
