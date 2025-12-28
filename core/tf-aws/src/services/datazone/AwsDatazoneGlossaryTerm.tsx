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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  created_at: z.string().optional(),
  created_by: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/datazone_glossary_term

export function AwsDatazoneGlossaryTerm(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datazone_glossary_term'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDatazoneGlossaryTerm = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsDatazoneGlossaryTerm,
    idFilter,
    baseNode,
    optional,
  )
