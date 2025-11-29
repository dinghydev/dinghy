import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudwatch_query_definition

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  query_string: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  log_group_names: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  query_definition_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudwatchQueryDefinition(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_query_definition'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchQueryDefinition = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCloudwatchQueryDefinition, node, id)

export const useAwsCloudwatchQueryDefinitions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCloudwatchQueryDefinition, node, id)
