import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLambdaCodeSigningConfig } from './AwsLambdaCodeSigningConfig.tsx'

export const DataAwsLambdaCodeSigningConfigInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsLambdaCodeSigningConfigOutputSchema = z.object({
  allowed_publishers: z.object({
    signing_profile_version_arns: z.set(z.string()),
  }).array().optional(),
  config_id: z.string().optional(),
  description: z.string().optional(),
  last_modified: z.string().optional(),
  policies: z.object({
    untrusted_artifact_on_deployment: z.string(),
  }).array().optional(),
})

export type DataAwsLambdaCodeSigningConfigInputProps =
  & z.input<typeof DataAwsLambdaCodeSigningConfigInputSchema>
  & NodeProps

export type DataAwsLambdaCodeSigningConfigOutputProps =
  & z.output<typeof DataAwsLambdaCodeSigningConfigOutputSchema>
  & z.output<typeof DataAwsLambdaCodeSigningConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/lambda_code_signing_config

export function DataAwsLambdaCodeSigningConfig(
  props: Partial<DataAwsLambdaCodeSigningConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsLambdaCodeSigningConfig
      _type='aws_lambda_code_signing_config'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsLambdaCodeSigningConfigInputSchema}
      _outputSchema={DataAwsLambdaCodeSigningConfigOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLambdaCodeSigningConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsLambdaCodeSigningConfigOutputProps>(
    DataAwsLambdaCodeSigningConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsLambdaCodeSigningConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsLambdaCodeSigningConfigOutputProps>(
    DataAwsLambdaCodeSigningConfig,
    idFilter,
    baseNode,
    optional,
  )
