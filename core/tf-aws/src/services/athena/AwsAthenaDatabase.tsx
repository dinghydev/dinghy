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

export const AwsAthenaDatabaseInputSchema = TfMetaSchema.extend({
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
})

export const AwsAthenaDatabaseOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsAthenaDatabaseInputProps =
  & z.input<typeof AwsAthenaDatabaseInputSchema>
  & NodeProps

export type AwsAthenaDatabaseOutputProps =
  & z.output<typeof AwsAthenaDatabaseOutputSchema>
  & z.output<typeof AwsAthenaDatabaseInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/athena_database

export function AwsAthenaDatabase(props: Partial<AwsAthenaDatabaseInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_athena_database'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAthenaDatabaseInputSchema}
      _outputSchema={AwsAthenaDatabaseOutputSchema}
      {...props}
    />
  )
}

export const useAwsAthenaDatabase = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAthenaDatabaseOutputProps>(
    AwsAthenaDatabase,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAthenaDatabases = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAthenaDatabaseOutputProps>(
    AwsAthenaDatabase,
    idFilter,
    baseNode,
    optional,
  )
