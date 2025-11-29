import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/accessanalyzer_archive_rule

export const InputSchema = z.object({
  analyzer_name: resolvableValue(z.string()),
  rule_name: resolvableValue(z.string()),
  filter: resolvableValue(
    z.object({
      contains: z.string().array().optional(),
      criteria: z.string(),
      eq: z.string().array().optional(),
      exists: z.string().optional(),
      neq: z.string().array().optional(),
    }).array(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAccessanalyzerArchiveRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_accessanalyzer_archive_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAccessanalyzerArchiveRule = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAccessanalyzerArchiveRule, node, id)

export const useAwsAccessanalyzerArchiveRules = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAccessanalyzerArchiveRule, node, id)
