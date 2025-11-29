import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lambda_code_signing_config

export const InputSchema = z.object({
  allowed_publishers: resolvableValue(z.object({
    signing_profile_version_arns: z.string().array(),
  })),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  policies: resolvableValue(
    z.object({
      untrusted_artifact_on_deployment: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  config_id: z.string().optional(),
  last_modified: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLambdaCodeSigningConfig(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lambda_code_signing_config'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLambdaCodeSigningConfig = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLambdaCodeSigningConfig, node, id)

export const useAwsLambdaCodeSigningConfigs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLambdaCodeSigningConfig, node, id)
