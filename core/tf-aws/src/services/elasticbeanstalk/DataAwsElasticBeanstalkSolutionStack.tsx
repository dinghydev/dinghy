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

export const InputSchema = TfMetaSchema.extend({
  name_regex: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  most_recent: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/elastic_beanstalk_solution_stack

export function DataAwsElasticBeanstalkSolutionStack(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsElasticBeanstalkSolutionStack = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsElasticBeanstalkSolutionStack,
    idFilter,
    baseNode,
    optional,
  )
