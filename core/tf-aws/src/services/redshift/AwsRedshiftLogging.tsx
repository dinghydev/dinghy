import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/redshift_logging

export const InputSchema = z.object({
  cluster_identifier: resolvableValue(z.string()),
  bucket_name: resolvableValue(z.string().optional()),
  log_destination_type: resolvableValue(z.string().optional()),
  log_exports: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  s3_key_prefix: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRedshiftLogging(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_logging'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftLogging = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRedshiftLogging, node, id)

export const useAwsRedshiftLoggings = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRedshiftLogging, node, id)
