import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/datazone_project

export const InputSchema = z.object({
  domain_identifier: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  skip_deletion_check: resolvableValue(z.boolean().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDatazoneProject(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datazone_project'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDatazoneProject = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDatazoneProject, node, id)

export const useAwsDatazoneProjects = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDatazoneProject, node, id)
