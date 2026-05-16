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

export const AwsCloud9EnvironmentEc2InputSchema = TfMetaSchema.extend({
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

export const AwsCloud9EnvironmentEc2OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
})

export type AwsCloud9EnvironmentEc2InputProps =
  & z.input<typeof AwsCloud9EnvironmentEc2InputSchema>
  & NodeProps

export type AwsCloud9EnvironmentEc2OutputProps =
  & z.output<typeof AwsCloud9EnvironmentEc2OutputSchema>
  & z.output<typeof AwsCloud9EnvironmentEc2InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloud9_environment_ec2

export function AwsCloud9EnvironmentEc2(
  props: Partial<AwsCloud9EnvironmentEc2InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloud9_environment_ec2'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloud9EnvironmentEc2InputSchema}
      _outputSchema={AwsCloud9EnvironmentEc2OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloud9EnvironmentEc2 = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloud9EnvironmentEc2OutputProps>(
    AwsCloud9EnvironmentEc2,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloud9EnvironmentEc2s = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloud9EnvironmentEc2OutputProps>(
    AwsCloud9EnvironmentEc2,
    idFilter,
    baseNode,
    optional,
  )
