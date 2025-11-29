import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloud9_environment_membership

export const InputSchema = z.object({
  environment_id: resolvableValue(z.string()),
  permissions: resolvableValue(z.string()),
  user_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  user_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloud9EnvironmentMembership(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloud9_environment_membership'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloud9EnvironmentMembership = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCloud9EnvironmentMembership, node, id)

export const useAwsCloud9EnvironmentMemberships = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCloud9EnvironmentMembership, node, id)
