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

export const AwsElasticBeanstalkConfigurationTemplateInputSchema = TfMetaSchema
  .extend({
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

export const AwsElasticBeanstalkConfigurationTemplateOutputSchema = z.object({})

export type AwsElasticBeanstalkConfigurationTemplateInputProps =
  & z.input<typeof AwsElasticBeanstalkConfigurationTemplateInputSchema>
  & NodeProps

export type AwsElasticBeanstalkConfigurationTemplateOutputProps =
  & z.output<typeof AwsElasticBeanstalkConfigurationTemplateOutputSchema>
  & z.output<typeof AwsElasticBeanstalkConfigurationTemplateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/elastic_beanstalk_configuration_template

export function AwsElasticBeanstalkConfigurationTemplate(
  props: Partial<AwsElasticBeanstalkConfigurationTemplateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elastic_beanstalk_configuration_template'
      _category='resource'
      _title={_title}
      _inputSchema={AwsElasticBeanstalkConfigurationTemplateInputSchema}
      _outputSchema={AwsElasticBeanstalkConfigurationTemplateOutputSchema}
      {...props}
    />
  )
}

export const useAwsElasticBeanstalkConfigurationTemplate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsElasticBeanstalkConfigurationTemplateOutputProps>(
    AwsElasticBeanstalkConfigurationTemplate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsElasticBeanstalkConfigurationTemplates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsElasticBeanstalkConfigurationTemplateOutputProps>(
    AwsElasticBeanstalkConfigurationTemplate,
    idFilter,
    baseNode,
    optional,
  )
