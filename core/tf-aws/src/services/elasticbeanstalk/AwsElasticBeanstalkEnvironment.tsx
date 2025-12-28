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

export const InputSchema = z.object({
  application: resolvableValue(z.string()),
  arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  cname_prefix: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  platform_arn: resolvableValue(z.string().optional()),
  poll_interval: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  setting: resolvableValue(
    z.object({
      name: z.string(),
      namespace: z.string(),
      resource: z.string().optional(),
      value: z.string(),
    }).array().optional(),
  ),
  solution_stack_name: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  template_name: resolvableValue(z.string().optional()),
  tier: resolvableValue(z.string().optional()),
  version_label: resolvableValue(z.string().optional()),
  wait_for_ready_timeout: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  all_settings: z.set(z.object({
    name: z.string(),
    namespace: z.string(),
    resource: z.string(),
    value: z.string(),
  })).optional(),
  application: z.string().optional(),
  autoscaling_groups: z.string().array().optional(),
  cname: z.string().optional(),
  description: z.string().optional(),
  endpoint_url: z.string().optional(),
  id: z.string().optional(),
  instances: z.string().array().optional(),
  launch_configurations: z.string().array().optional(),
  load_balancers: z.string().array().optional(),
  name: z.string().optional(),
  queues: z.string().array().optional(),
  setting: z.object({
    name: z.string(),
    namespace: z.string(),
    resource: z.string().optional(),
    value: z.string(),
  }).array().optional().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  tier: z.string().optional(),
  triggers: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/elastic_beanstalk_environment

export function AwsElasticBeanstalkEnvironment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elastic_beanstalk_environment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsElasticBeanstalkEnvironment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsElasticBeanstalkEnvironment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsElasticBeanstalkEnvironments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsElasticBeanstalkEnvironment,
    idFilter,
    baseNode,
    optional,
  )
