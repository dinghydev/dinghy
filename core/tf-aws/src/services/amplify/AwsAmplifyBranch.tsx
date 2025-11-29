import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/amplify_branch

export const InputSchema = z.object({
  app_id: resolvableValue(z.string()),
  branch_name: resolvableValue(z.string()),
  backend_environment_arn: resolvableValue(z.string().optional()),
  basic_auth_credentials: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  display_name: resolvableValue(z.string().optional()),
  enable_auto_build: resolvableValue(z.boolean().optional()),
  enable_basic_auth: resolvableValue(z.boolean().optional()),
  enable_notification: resolvableValue(z.boolean().optional()),
  enable_performance_mode: resolvableValue(z.boolean().optional()),
  enable_pull_request_preview: resolvableValue(z.boolean().optional()),
  enable_skew_protection: resolvableValue(z.boolean().optional()),
  environment_variables: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  framework: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  pull_request_environment_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  stage: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  ttl: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  associated_resources: z.string().array().optional(),
  custom_domains: z.string().array().optional(),
  destination_branch: z.string().optional(),
  source_branch: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAmplifyBranch(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_amplify_branch'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAmplifyBranch = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAmplifyBranch, node, id)

export const useAwsAmplifyBranchs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAmplifyBranch, node, id)
