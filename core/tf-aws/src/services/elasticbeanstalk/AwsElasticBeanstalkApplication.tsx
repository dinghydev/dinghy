import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/elastic_beanstalk_application

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  appversion_lifecycle: resolvableValue(
    z.object({
      delete_source_from_s3: z.boolean().optional(),
      max_age_in_days: z.number().optional(),
      max_count: z.number().optional(),
      service_role: z.string(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsElasticBeanstalkApplication(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elastic_beanstalk_application'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsElasticBeanstalkApplication = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsElasticBeanstalkApplication, node, id)

export const useAwsElasticBeanstalkApplications = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsElasticBeanstalkApplication, node, id)
