import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/glue_classifier

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  csv_classifier: resolvableValue(
    z.object({
      allow_single_column: z.boolean().optional(),
      contains_header: z.string().optional(),
      custom_datatype_configured: z.boolean().optional(),
      custom_datatypes: z.string().array().optional(),
      delimiter: z.string().optional(),
      disable_value_trimming: z.boolean().optional(),
      header: z.string().array().optional(),
      quote_symbol: z.string().optional(),
      serde: z.string().optional(),
    }).optional(),
  ),
  grok_classifier: resolvableValue(
    z.object({
      classification: z.string(),
      custom_patterns: z.string().optional(),
      grok_pattern: z.string(),
    }).optional(),
  ),
  json_classifier: resolvableValue(
    z.object({
      json_path: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  xml_classifier: resolvableValue(
    z.object({
      classification: z.string(),
      row_tag: z.string(),
    }).optional(),
  ),
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

export function AwsGlueClassifier(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_classifier'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGlueClassifier = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGlueClassifier, node, id)

export const useAwsGlueClassifiers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGlueClassifier, node, id)
