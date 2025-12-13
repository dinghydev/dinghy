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
  engine: resolvableValue(z.string()),
  engine_version: resolvableValue(z.string()),
  database_installation_files_s3_bucket_name: resolvableValue(
    z.string().optional(),
  ),
  database_installation_files_s3_prefix: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  filename: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  manifest: resolvableValue(z.string().optional()),
  manifest_hash: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  source_image_id: resolvableValue(z.string().optional()),
  status: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  create_time: z.string().optional(),
  db_parameter_group_family: z.string().optional(),
  image_id: z.string().optional(),
  major_engine_version: z.string().optional(),
  manifest_computed: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/rds_custom_db_engine_version

export function AwsRdsCustomDbEngineVersion(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rds_custom_db_engine_version'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRdsCustomDbEngineVersion = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsRdsCustomDbEngineVersion, idFilter, baseNode)

export const useAwsRdsCustomDbEngineVersions = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsRdsCustomDbEngineVersion, idFilter, baseNode)
