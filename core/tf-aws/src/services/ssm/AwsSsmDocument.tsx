import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ssm_document

export const InputSchema = z.object({
  content: resolvableValue(z.string()),
  document_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  attachments_source: resolvableValue(
    z.object({
      key: z.string(),
      name: z.string().optional(),
      values: z.string().array(),
    }).optional(),
  ),
  document_format: resolvableValue(z.string().optional()),
  permissions: resolvableValue(z.record(z.string(), z.string()).optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  target_type: resolvableValue(z.string().optional()),
  version_name: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_date: z.string().optional(),
  default_version: z.string().optional(),
  description: z.string().optional(),
  document_version: z.string().optional(),
  hash: z.string().optional(),
  hash_type: z.string().optional(),
  id: z.string().optional(),
  latest_version: z.string().optional(),
  owner: z.string().optional(),
  parameter: z.object({
    default_value: z.string(),
    description: z.string(),
    name: z.string(),
    type: z.string(),
  }).array().optional(),
  platform_types: z.string().array().optional(),
  schema_version: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSsmDocument(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_document'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSsmDocument = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSsmDocument, node, id)

export const useAwsSsmDocuments = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSsmDocument, node, id)
