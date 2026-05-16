import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsElasticBeanstalkApplication } from './AwsElasticBeanstalkApplication.tsx'

export const DataAwsElasticBeanstalkApplicationInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsElasticBeanstalkApplicationOutputSchema = z.object({
  appversion_lifecycle: z.object({
    delete_source_from_s3: z.boolean(),
    max_age_in_days: z.number(),
    max_count: z.number(),
    service_role: z.string(),
  }).array().optional(),
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
})

export type DataAwsElasticBeanstalkApplicationInputProps =
  & z.input<typeof DataAwsElasticBeanstalkApplicationInputSchema>
  & NodeProps

export type DataAwsElasticBeanstalkApplicationOutputProps =
  & z.output<typeof DataAwsElasticBeanstalkApplicationOutputSchema>
  & z.output<typeof DataAwsElasticBeanstalkApplicationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/elastic_beanstalk_application

export function DataAwsElasticBeanstalkApplication(
  props: Partial<DataAwsElasticBeanstalkApplicationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsElasticBeanstalkApplication
      _type='aws_elastic_beanstalk_application'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsElasticBeanstalkApplicationInputSchema}
      _outputSchema={DataAwsElasticBeanstalkApplicationOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsElasticBeanstalkApplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsElasticBeanstalkApplicationOutputProps>(
    DataAwsElasticBeanstalkApplication,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsElasticBeanstalkApplications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsElasticBeanstalkApplicationOutputProps>(
    DataAwsElasticBeanstalkApplication,
    idFilter,
    baseNode,
    optional,
  )
