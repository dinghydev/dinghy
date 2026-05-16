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

export const AwsDatazoneGlossaryInputSchema = TfMetaSchema.extend({
  domain_identifier: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  owning_project_identifier: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  status: resolvableValue(z.string().optional()),
})

export const AwsDatazoneGlossaryOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsDatazoneGlossaryInputProps =
  & z.input<typeof AwsDatazoneGlossaryInputSchema>
  & NodeProps

export type AwsDatazoneGlossaryOutputProps =
  & z.output<typeof AwsDatazoneGlossaryOutputSchema>
  & z.output<typeof AwsDatazoneGlossaryInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/datazone_glossary

export function AwsDatazoneGlossary(
  props: Partial<AwsDatazoneGlossaryInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datazone_glossary'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDatazoneGlossaryInputSchema}
      _outputSchema={AwsDatazoneGlossaryOutputSchema}
      {...props}
    />
  )
}

export const useAwsDatazoneGlossary = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDatazoneGlossaryOutputProps>(
    AwsDatazoneGlossary,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDatazoneGlossarys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDatazoneGlossaryOutputProps>(
    AwsDatazoneGlossary,
    idFilter,
    baseNode,
    optional,
  )
