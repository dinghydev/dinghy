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

export const AwsDatazoneGlossaryTermInputSchema = TfMetaSchema.extend({
  glossary_identifier: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  domain_identifier: resolvableValue(z.string().optional()),
  long_description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  short_description: resolvableValue(z.string().optional()),
  status: resolvableValue(z.string().optional()),
  term_relations: resolvableValue(
    z.object({
      classifies: z.string().array().optional(),
      is_a: z.string().array().optional(),
    }).array().optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const AwsDatazoneGlossaryTermOutputSchema = z.object({
  created_at: z.string().optional(),
  created_by: z.string().optional(),
  id: z.string().optional(),
})

export type AwsDatazoneGlossaryTermInputProps =
  & z.input<typeof AwsDatazoneGlossaryTermInputSchema>
  & NodeProps

export type AwsDatazoneGlossaryTermOutputProps =
  & z.output<typeof AwsDatazoneGlossaryTermOutputSchema>
  & z.output<typeof AwsDatazoneGlossaryTermInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/datazone_glossary_term

export function AwsDatazoneGlossaryTerm(
  props: Partial<AwsDatazoneGlossaryTermInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datazone_glossary_term'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDatazoneGlossaryTermInputSchema}
      _outputSchema={AwsDatazoneGlossaryTermOutputSchema}
      {...props}
    />
  )
}

export const useAwsDatazoneGlossaryTerm = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDatazoneGlossaryTermOutputProps>(
    AwsDatazoneGlossaryTerm,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDatazoneGlossaryTerms = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDatazoneGlossaryTermOutputProps>(
    AwsDatazoneGlossaryTerm,
    idFilter,
    baseNode,
    optional,
  )
