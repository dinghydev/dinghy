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

export const InputSchema = z.object({
  appversion_lifecycle: resolvableValue(
    z.object({
      delete_source_from_s3: z.boolean(),
      max_age_in_days: z.number(),
      max_count: z.number(),
      service_role: z.string(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/elastic_beanstalk_application

export function DataAwsElasticBeanstalkApplication(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsElasticBeanstalkApplication
      _type='aws_elastic_beanstalk_application'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsElasticBeanstalkApplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsElasticBeanstalkApplication,
    idFilter,
    baseNode,
    optional,
  )
