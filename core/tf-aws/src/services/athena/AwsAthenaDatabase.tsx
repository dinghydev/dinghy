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
  name: resolvableValue(z.string()),
  acl_configuration: resolvableValue(
    z.object({
      s3_acl_option: z.string(),
    }).optional(),
  ),
  bucket: resolvableValue(z.string().optional()),
  comment: resolvableValue(z.string().optional()),
  encryption_configuration: resolvableValue(
    z.object({
      encryption_option: z.string(),
      kms_key: z.string().optional(),
    }).optional(),
  ),
  expected_bucket_owner: resolvableValue(z.string().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  properties: resolvableValue(z.record(z.string(), z.string()).optional()),
  region: resolvableValue(z.string().optional()),
  workgroup: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/athena_database

export function AwsAthenaDatabase(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_athena_database'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAthenaDatabase = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsAthenaDatabase, idFilter, baseNode, optional)

export const useAwsAthenaDatabases = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsAthenaDatabase, idFilter, baseNode, optional)
