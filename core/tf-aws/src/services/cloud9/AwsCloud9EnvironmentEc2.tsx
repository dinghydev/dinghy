import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloud9_environment_ec2

export const InputSchema = z.object({
  image_id: resolvableValue(z.string()),
  instance_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  automatic_stop_time_minutes: resolvableValue(z.number().optional()),
  connection_type: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  owner_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  subnet_id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloud9EnvironmentEc2(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloud9_environment_ec2'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloud9EnvironmentEc2 = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCloud9EnvironmentEc2, node, id)

export const useAwsCloud9EnvironmentEc2s = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCloud9EnvironmentEc2, node, id)
