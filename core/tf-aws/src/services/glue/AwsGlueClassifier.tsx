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

export const AwsGlueClassifierInputSchema = TfMetaSchema.extend({
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

export const AwsGlueClassifierOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsGlueClassifierInputProps =
  & z.input<typeof AwsGlueClassifierInputSchema>
  & NodeProps

export type AwsGlueClassifierOutputProps =
  & z.output<typeof AwsGlueClassifierOutputSchema>
  & z.output<typeof AwsGlueClassifierInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/glue_classifier

export function AwsGlueClassifier(props: Partial<AwsGlueClassifierInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_classifier'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGlueClassifierInputSchema}
      _outputSchema={AwsGlueClassifierOutputSchema}
      {...props}
    />
  )
}

export const useAwsGlueClassifier = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGlueClassifierOutputProps>(
    AwsGlueClassifier,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGlueClassifiers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGlueClassifierOutputProps>(
    AwsGlueClassifier,
    idFilter,
    baseNode,
    optional,
  )
