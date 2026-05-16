import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLambdaLayerVersion } from './AwsLambdaLayerVersion.tsx'

export const DataAwsLambdaLayerVersionInputSchema = TfMetaSchema.extend({
  compatible_architecture: resolvableValue(z.string().optional()),
  compatible_runtime: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  layer_name: resolvableValue(z.string().optional()),
  layer_version_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  version: resolvableValue(z.number().optional()),
})

export const DataAwsLambdaLayerVersionOutputSchema = z.object({
  arn: z.string().optional(),
  code_sha256: z.string().optional(),
  compatible_architectures: z.set(z.string()).optional(),
  compatible_runtimes: z.set(z.string()).optional(),
  created_date: z.string().optional(),
  description: z.string().optional(),
  layer_arn: z.string().optional(),
  license_info: z.string().optional(),
  signing_job_arn: z.string().optional(),
  signing_profile_version_arn: z.string().optional(),
  source_code_hash: z.string().optional(),
  source_code_size: z.number().optional(),
})

export type DataAwsLambdaLayerVersionInputProps =
  & z.input<typeof DataAwsLambdaLayerVersionInputSchema>
  & NodeProps

export type DataAwsLambdaLayerVersionOutputProps =
  & z.output<typeof DataAwsLambdaLayerVersionOutputSchema>
  & z.output<typeof DataAwsLambdaLayerVersionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/lambda_layer_version

export function DataAwsLambdaLayerVersion(
  props: Partial<DataAwsLambdaLayerVersionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsLambdaLayerVersion
      _type='aws_lambda_layer_version'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsLambdaLayerVersionInputSchema}
      _outputSchema={DataAwsLambdaLayerVersionOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLambdaLayerVersion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsLambdaLayerVersionOutputProps>(
    DataAwsLambdaLayerVersion,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsLambdaLayerVersions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsLambdaLayerVersionOutputProps>(
    DataAwsLambdaLayerVersion,
    idFilter,
    baseNode,
    optional,
  )
