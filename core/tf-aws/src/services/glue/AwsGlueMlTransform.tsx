import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/glue_ml_transform

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  parameters: resolvableValue(z.object({
    transform_type: z.string(),
  })),
  role_arn: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  glue_version: resolvableValue(z.string().optional()),
  input_record_tables: resolvableValue(z.object({
    catalog_id: z.string().optional(),
    connection_name: z.string().optional(),
    database_name: z.string(),
    table_name: z.string(),
  })),
  max_capacity: resolvableValue(z.number().optional()),
  max_retries: resolvableValue(z.number().optional()),
  number_of_workers: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeout: resolvableValue(z.number().optional()),
  worker_type: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  label_count: z.number().optional(),
  schema: z.object({
    data_type: z.string(),
    name: z.string(),
  }).array().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGlueMlTransform(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_ml_transform'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGlueMlTransform = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGlueMlTransform, node, id)

export const useAwsGlueMlTransforms = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGlueMlTransform, node, id)
