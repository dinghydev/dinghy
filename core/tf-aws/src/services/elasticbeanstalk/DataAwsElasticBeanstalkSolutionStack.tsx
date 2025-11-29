import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/elastic_beanstalk_solution_stack

export const InputSchema = z.object({
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

export function DataAwsElasticBeanstalkSolutionStack(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsElasticBeanstalkSolutionStack, node, id)

export const useDataAwsElasticBeanstalkSolutionStacks = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsElasticBeanstalkSolutionStack, node, id)
