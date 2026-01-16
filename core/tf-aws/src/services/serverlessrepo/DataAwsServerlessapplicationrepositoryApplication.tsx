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

export const InputSchema = TfMetaSchema.extend({
  application_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  semantic_version: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  application_id: z.string().optional(),
  name: z.string().optional(),
  required_capabilities: z.set(z.string()).optional(),
  source_code_url: z.string().optional(),
  template_url: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/serverlessapplicationrepository_application

export function DataAwsServerlessapplicationrepositoryApplication(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_serverlessapplicationrepository_application'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsServerlessapplicationrepositoryApplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsServerlessapplicationrepositoryApplication,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsServerlessapplicationrepositoryApplications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsServerlessapplicationrepositoryApplication,
    idFilter,
    baseNode,
    optional,
  )
