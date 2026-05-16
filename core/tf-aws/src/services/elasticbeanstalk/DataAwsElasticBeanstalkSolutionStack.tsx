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

export const DataAwsElasticBeanstalkSolutionStackInputSchema = TfMetaSchema
  .extend({
    name_regex: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    most_recent: resolvableValue(z.boolean().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsElasticBeanstalkSolutionStackOutputSchema = z.object({
  name: z.string().optional(),
})

export type DataAwsElasticBeanstalkSolutionStackInputProps =
  & z.input<typeof DataAwsElasticBeanstalkSolutionStackInputSchema>
  & NodeProps

export type DataAwsElasticBeanstalkSolutionStackOutputProps =
  & z.output<typeof DataAwsElasticBeanstalkSolutionStackOutputSchema>
  & z.output<typeof DataAwsElasticBeanstalkSolutionStackInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/elastic_beanstalk_solution_stack

export function DataAwsElasticBeanstalkSolutionStack(
  props: Partial<DataAwsElasticBeanstalkSolutionStackInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elastic_beanstalk_solution_stack'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsElasticBeanstalkSolutionStackInputSchema}
      _outputSchema={DataAwsElasticBeanstalkSolutionStackOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsElasticBeanstalkSolutionStack = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsElasticBeanstalkSolutionStackOutputProps>(
    DataAwsElasticBeanstalkSolutionStack,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsElasticBeanstalkSolutionStacks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsElasticBeanstalkSolutionStackOutputProps>(
    DataAwsElasticBeanstalkSolutionStack,
    idFilter,
    baseNode,
    optional,
  )
