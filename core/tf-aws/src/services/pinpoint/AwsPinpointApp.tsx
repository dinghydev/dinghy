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
  campaign_hook: resolvableValue(
    z.object({
      lambda_function_name: z.string().optional(),
      mode: z.string().optional(),
      web_url: z.string().optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  limits: resolvableValue(
    z.object({
      daily: z.number().optional(),
      maximum_duration: z.number().optional(),
      messages_per_second: z.number().optional(),
      total: z.number().optional(),
    }).optional(),
  ),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  quiet_time: resolvableValue(
    z.object({
      end: z.string().optional(),
      start: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  application_id: z.string().optional(),
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/pinpoint_app

export function AwsPinpointApp(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pinpoint_app'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsPinpointApp = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsPinpointApp, idFilter, baseNode, optional)

export const useAwsPinpointApps = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsPinpointApp, idFilter, baseNode, optional)
