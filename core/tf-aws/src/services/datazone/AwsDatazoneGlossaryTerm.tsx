import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/datazone_glossary_term

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
    }).optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

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

export function AwsDatazoneGlossaryTerm(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsDatazoneGlossaryTerm = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDatazoneGlossaryTerm, node, id)

export const useAwsDatazoneGlossaryTerms = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDatazoneGlossaryTerm, node, id)
