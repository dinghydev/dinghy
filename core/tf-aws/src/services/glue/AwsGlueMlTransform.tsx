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
  input_record_tables: resolvableValue(
    z.object({
      catalog_id: z.string().optional(),
      connection_name: z.string().optional(),
      database_name: z.string(),
      table_name: z.string(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  parameters: resolvableValue(z.object({
    transform_type: z.string(),
    find_matches_parameters: z.object({
      accuracy_cost_trade_off: z.number().optional(),
      enforce_provided_labels: z.boolean().optional(),
      precision_recall_trade_off: z.number().optional(),
      primary_key_column_name: z.string().optional(),
    }),
  })),
  role_arn: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  glue_version: resolvableValue(z.string().optional()),
  max_capacity: resolvableValue(z.number().optional()),
  max_retries: resolvableValue(z.number().optional()),
  number_of_workers: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeout: resolvableValue(z.number().optional()),
  worker_type: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/glue_ml_transform

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

export const useAwsGlueMlTransform = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsGlueMlTransform, idFilter, baseNode, optional)

export const useAwsGlueMlTransforms = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsGlueMlTransform, idFilter, baseNode, optional)
