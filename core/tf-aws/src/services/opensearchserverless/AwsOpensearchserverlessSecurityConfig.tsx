import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/opensearchserverless_security_config

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
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
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  config_version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsOpensearchserverlessSecurityConfig(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_opensearchserverless_security_config'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsOpensearchserverlessSecurityConfig = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsOpensearchserverlessSecurityConfig, node, id)

export const useAwsOpensearchserverlessSecurityConfigs = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsOpensearchserverlessSecurityConfig, node, id)
