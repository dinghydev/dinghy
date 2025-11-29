import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLambdaCodeSigningConfig } from './AwsLambdaCodeSigningConfig.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/lambda_code_signing_config

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  allowed_publishers: z.object({
    signing_profile_version_arns: z.string().array(),
  }).array().optional(),
  config_id: z.string().optional(),
  description: z.string().optional(),
  last_modified: z.string().optional(),
  policies: z.object({
    untrusted_artifact_on_deployment: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsLambdaCodeSigningConfig(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsLambdaCodeSigningConfig
      _type='aws_lambda_code_signing_config'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLambdaCodeSigningConfig = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsLambdaCodeSigningConfig, node, id)

export const useDataAwsLambdaCodeSigningConfigs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsLambdaCodeSigningConfig, node, id)
