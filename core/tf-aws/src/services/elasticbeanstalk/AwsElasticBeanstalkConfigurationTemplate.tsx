import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/elastic_beanstalk_configuration_template

export const InputSchema = z.object({
  application: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  environment_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
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
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsElasticBeanstalkConfigurationTemplate(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elastic_beanstalk_configuration_template'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsElasticBeanstalkConfigurationTemplate = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsElasticBeanstalkConfigurationTemplate, node, id)

export const useAwsElasticBeanstalkConfigurationTemplates = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsElasticBeanstalkConfigurationTemplate, node, id)
