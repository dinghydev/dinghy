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

export const AwsLambdaCodeSigningConfigInputSchema = TfMetaSchema.extend({
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

export const AwsLambdaCodeSigningConfigOutputSchema = z.object({
  arn: z.string().optional(),
  config_id: z.string().optional(),
  last_modified: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsLambdaCodeSigningConfigInputProps =
  & z.input<typeof AwsLambdaCodeSigningConfigInputSchema>
  & NodeProps

export type AwsLambdaCodeSigningConfigOutputProps =
  & z.output<typeof AwsLambdaCodeSigningConfigOutputSchema>
  & z.output<typeof AwsLambdaCodeSigningConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lambda_code_signing_config

export function AwsLambdaCodeSigningConfig(
  props: Partial<AwsLambdaCodeSigningConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lambda_code_signing_config'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLambdaCodeSigningConfigInputSchema}
      _outputSchema={AwsLambdaCodeSigningConfigOutputSchema}
      {...props}
    />
  )
}

export const useAwsLambdaCodeSigningConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLambdaCodeSigningConfigOutputProps>(
    AwsLambdaCodeSigningConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLambdaCodeSigningConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLambdaCodeSigningConfigOutputProps>(
    AwsLambdaCodeSigningConfig,
    idFilter,
    baseNode,
    optional,
  )
