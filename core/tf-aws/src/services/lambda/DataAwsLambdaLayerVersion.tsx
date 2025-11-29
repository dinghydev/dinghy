import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLambdaLayerVersion } from './AwsLambdaLayerVersion.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/lambda_layer_version

export const InputSchema = z.object({
  layer_name: resolvableValue(z.string()),
  compatible_architecture: resolvableValue(z.string().optional()),
  compatible_runtime: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  code_sha256: z.string().optional(),
  compatible_architectures: z.string().array().optional(),
  compatible_runtimes: z.string().array().optional(),
  created_date: z.string().optional(),
  description: z.string().optional(),
  layer_arn: z.string().optional(),
  license_info: z.string().optional(),
  signing_job_arn: z.string().optional(),
  signing_profile_version_arn: z.string().optional(),
  source_code_hash: z.string().optional(),
  source_code_size: z.number().optional(),
  version: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsLambdaLayerVersion(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsLambdaLayerVersion
      _type='aws_lambda_layer_version'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLambdaLayerVersion = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsLambdaLayerVersion, node, id)

export const useDataAwsLambdaLayerVersions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsLambdaLayerVersion, node, id)
