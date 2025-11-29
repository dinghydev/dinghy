import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/datasync_location_s3

export const InputSchema = z.object({
  s3_bucket_arn: resolvableValue(z.string()),
  s3_config: resolvableValue(z.object({
    bucket_access_role_arn: z.string(),
  })),
  subdirectory: resolvableValue(z.string()),
  uri: resolvableValue(z.string()),
  agent_arns: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  s3_storage_class: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDatasyncLocationS3(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datasync_location_s3'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsDatasyncLocationS3 = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDatasyncLocationS3, node, id)

export const useAwsDatasyncLocationS3s = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDatasyncLocationS3, node, id)
