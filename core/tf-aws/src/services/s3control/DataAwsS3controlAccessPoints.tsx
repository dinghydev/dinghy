import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = TfMetaSchema.extend({
  account_id: resolvableValue(z.string().optional()),
  bucket: resolvableValue(z.string().optional()),
  data_source_id: resolvableValue(z.string().optional()),
  data_source_type: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  access_points: z.object({
    access_point_arn: z.string(),
    alias: z.string(),
    bucket: z.string(),
    bucket_account_id: z.string(),
    data_source_id: z.string(),
    data_source_type: z.string(),
    name: z.string(),
    network_origin: z.string(),
    vpc_configuration: z.object({
      vpc_id: z.string(),
    }).array(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/s3control_access_points

export function DataAwsS3controlAccessPoints(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3control_access_points'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsS3controlAccessPointss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsS3controlAccessPoints,
    idFilter,
    baseNode,
    optional,
  )
