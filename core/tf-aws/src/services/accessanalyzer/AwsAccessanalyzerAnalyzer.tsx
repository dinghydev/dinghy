import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/accessanalyzer_analyzer

export const InputSchema = z.object({
  analyzer_name: resolvableValue(z.string()),
  configuration: resolvableValue(
    z.object({
      internal_access: z.object({
        analysis_rule: z.object({
          inclusion: z.object({
            account_ids: z.string().array().optional(),
            resource_arns: z.string().array().optional(),
            resource_types: z.string().array().optional(),
          }).optional(),
        }).optional(),
      }).optional(),
      unused_access: z.object({
        unused_access_age: z.number().optional(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  type: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAccessanalyzerAnalyzer(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_accessanalyzer_analyzer'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAccessanalyzerAnalyzer = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAccessanalyzerAnalyzer, node, id)

export const useAwsAccessanalyzerAnalyzers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAccessanalyzerAnalyzer, node, id)
