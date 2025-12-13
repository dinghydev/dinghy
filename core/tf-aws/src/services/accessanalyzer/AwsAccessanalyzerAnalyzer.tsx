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
  configuration: resolvableValue(
    z.object({
      internal_access: z.object({
        analysis_rule: z.object({
          inclusion: z.object({
            account_ids: z.string().array().optional(),
            resource_arns: z.string().array().optional(),
            resource_types: z.string().array().optional(),
          }).array().optional(),
        }).optional(),
      }).optional(),
      unused_access: z.object({
        unused_access_age: z.number().optional(),
        analysis_rule: z.object({
          exclusion: z.object({
            account_ids: z.string().array().optional(),
            resource_tags: z.record(z.string(), z.string()).array().optional(),
          }).array().optional(),
        }).optional(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  type: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/accessanalyzer_analyzer

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

export const useAwsAccessanalyzerAnalyzer = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsAccessanalyzerAnalyzer, idFilter, baseNode)

export const useAwsAccessanalyzerAnalyzers = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsAccessanalyzerAnalyzer, idFilter, baseNode)
