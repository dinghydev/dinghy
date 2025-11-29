import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/quicksight_ingestion

export const InputSchema = z.object({
  data_set_id: resolvableValue(z.string()),
  ingestion_id: resolvableValue(z.string()),
  ingestion_type: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  ingestion_status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsQuicksightIngestion(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_ingestion'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightIngestion = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsQuicksightIngestion, node, id)

export const useAwsQuicksightIngestions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsQuicksightIngestion, node, id)
