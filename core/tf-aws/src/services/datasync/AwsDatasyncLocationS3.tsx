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

export const AwsDatasyncLocationS3InputSchema = TfMetaSchema.extend({
  s3_bucket_arn: resolvableValue(z.string()),
  s3_config: resolvableValue(z.object({
    bucket_access_role_arn: z.string(),
  })),
  subdirectory: resolvableValue(z.string()),
  agent_arns: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  s3_storage_class: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDatasyncLocationS3OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  uri: z.string().optional(),
})

export const AwsDatasyncLocationS3ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsDatasyncLocationS3InputProps =
  & z.input<typeof AwsDatasyncLocationS3InputSchema>
  & z.input<typeof AwsDatasyncLocationS3ImportSchema>
  & NodeProps

export type AwsDatasyncLocationS3OutputProps =
  & z.output<typeof AwsDatasyncLocationS3OutputSchema>
  & z.output<typeof AwsDatasyncLocationS3InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/datasync_location_s3

export function AwsDatasyncLocationS3(
  props: Partial<AwsDatasyncLocationS3InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datasync_location_s3'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDatasyncLocationS3InputSchema}
      _outputSchema={AwsDatasyncLocationS3OutputSchema}
      _importSchema={AwsDatasyncLocationS3ImportSchema}
      {...props}
    />
  )
}

export const useAwsDatasyncLocationS3 = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDatasyncLocationS3OutputProps>(
    AwsDatasyncLocationS3,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDatasyncLocationS3s = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDatasyncLocationS3OutputProps>(
    AwsDatasyncLocationS3,
    idFilter,
    baseNode,
    optional,
  )
