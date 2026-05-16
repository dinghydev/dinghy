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

export const AwsDatazoneProjectInputSchema = TfMetaSchema.extend({
  domain_identifier: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  glossary_terms: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  skip_deletion_check: resolvableValue(z.boolean().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsDatazoneProjectOutputSchema = z.object({
  created_at: z.string().optional(),
  created_by: z.string().optional(),
  description: z.string().optional(),
  failure_reasons: z.object({
    code: z.string(),
    message: z.string(),
  }).array().optional(),
  glossary_terms: z.string().array().optional(),
  id: z.string().optional(),
  last_updated_at: z.string().optional(),
  name: z.string().optional(),
  project_status: z.string().optional(),
})

export type AwsDatazoneProjectInputProps =
  & z.input<typeof AwsDatazoneProjectInputSchema>
  & NodeProps

export type AwsDatazoneProjectOutputProps =
  & z.output<typeof AwsDatazoneProjectOutputSchema>
  & z.output<typeof AwsDatazoneProjectInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/datazone_project

export function AwsDatazoneProject(
  props: Partial<AwsDatazoneProjectInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datazone_project'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDatazoneProjectInputSchema}
      _outputSchema={AwsDatazoneProjectOutputSchema}
      {...props}
    />
  )
}

export const useAwsDatazoneProject = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDatazoneProjectOutputProps>(
    AwsDatazoneProject,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDatazoneProjects = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDatazoneProjectOutputProps>(
    AwsDatazoneProject,
    idFilter,
    baseNode,
    optional,
  )
