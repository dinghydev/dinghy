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

export const AwsElasticBeanstalkApplicationVersionInputSchema = TfMetaSchema
  .extend({
    __key: resolvableValue(z.string()),
    application: resolvableValue(z.string()),
    bucket: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    description: resolvableValue(z.string().optional()),
    force_delete: resolvableValue(z.boolean().optional()),
    id: resolvableValue(z.string().optional()),
    process: resolvableValue(z.boolean().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsElasticBeanstalkApplicationVersionOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsElasticBeanstalkApplicationVersionInputProps =
  & z.input<typeof AwsElasticBeanstalkApplicationVersionInputSchema>
  & NodeProps

export type AwsElasticBeanstalkApplicationVersionOutputProps =
  & z.output<typeof AwsElasticBeanstalkApplicationVersionOutputSchema>
  & z.output<typeof AwsElasticBeanstalkApplicationVersionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/elastic_beanstalk_application_version

export function AwsElasticBeanstalkApplicationVersion(
  props: Partial<AwsElasticBeanstalkApplicationVersionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elastic_beanstalk_application_version'
      _category='resource'
      _title={_title}
      _inputSchema={AwsElasticBeanstalkApplicationVersionInputSchema}
      _outputSchema={AwsElasticBeanstalkApplicationVersionOutputSchema}
      {...props}
    />
  )
}

export const useAwsElasticBeanstalkApplicationVersion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsElasticBeanstalkApplicationVersionOutputProps>(
    AwsElasticBeanstalkApplicationVersion,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsElasticBeanstalkApplicationVersions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsElasticBeanstalkApplicationVersionOutputProps>(
    AwsElasticBeanstalkApplicationVersion,
    idFilter,
    baseNode,
    optional,
  )
