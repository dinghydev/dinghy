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

export const InputSchema = z.object({
  analyzer_name: resolvableValue(z.string()),
  filter: resolvableValue(
    z.object({
      contains: z.string().array().optional(),
      criteria: z.string(),
      eq: z.string().array().optional(),
      exists: z.string().optional(),
      neq: z.string().array().optional(),
    }).array(),
  ),
  rule_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/accessanalyzer_archive_rule

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

export const useAwsAccessanalyzerArchiveRule = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsAccessanalyzerArchiveRule, idFilter, baseNode)

export const useAwsAccessanalyzerArchiveRules = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(AwsAccessanalyzerArchiveRule, idFilter, baseNode)
