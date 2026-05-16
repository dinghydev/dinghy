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

export const AwsPinpointAppInputSchema = TfMetaSchema.extend({
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
})

export const AwsPinpointAppOutputSchema = z.object({
  application_id: z.string().optional(),
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsPinpointAppInputProps =
  & z.input<typeof AwsPinpointAppInputSchema>
  & NodeProps

export type AwsPinpointAppOutputProps =
  & z.output<typeof AwsPinpointAppOutputSchema>
  & z.output<typeof AwsPinpointAppInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_app

export function AwsPinpointApp(props: Partial<AwsPinpointAppInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pinpoint_app'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPinpointAppInputSchema}
      _outputSchema={AwsPinpointAppOutputSchema}
      {...props}
    />
  )
}

export const useAwsPinpointApp = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsPinpointAppOutputProps>(
    AwsPinpointApp,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPinpointApps = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPinpointAppOutputProps>(
    AwsPinpointApp,
    idFilter,
    baseNode,
    optional,
  )
