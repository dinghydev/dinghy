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

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  config_version: z.string().optional(),
  created_date: z.string().optional(),
  description: z.string().optional(),
  last_modified_date: z.string().optional(),
  saml_options: z.object({
    group_attribute: z.string(),
    metadata: z.string(),
    session_timeout: z.number(),
    user_attribute: z.string(),
  }).array().optional().optional(),
  type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/opensearchserverless_security_config

export function DataAwsOpensearchserverlessSecurityConfig(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsOpensearchserverlessSecurityConfig
      _type='aws_opensearchserverless_security_config'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOpensearchserverlessSecurityConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsOpensearchserverlessSecurityConfig,
    idFilter,
    baseNode,
    optional,
  )
