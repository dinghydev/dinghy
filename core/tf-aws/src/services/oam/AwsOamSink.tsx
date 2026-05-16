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

export const AwsOamSinkInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsOamSinkOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  sink_id: z.string().optional(),
})

export type AwsOamSinkInputProps =
  & z.input<typeof AwsOamSinkInputSchema>
  & NodeProps

export type AwsOamSinkOutputProps =
  & z.output<typeof AwsOamSinkOutputSchema>
  & z.output<typeof AwsOamSinkInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/oam_sink

export function AwsOamSink(props: Partial<AwsOamSinkInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_oam_sink'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOamSinkInputSchema}
      _outputSchema={AwsOamSinkOutputSchema}
      {...props}
    />
  )
}

export const useAwsOamSink = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOamSinkOutputProps>(AwsOamSink, idFilter, baseNode, optional)

export const useAwsOamSinks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOamSinkOutputProps>(AwsOamSink, idFilter, baseNode, optional)
