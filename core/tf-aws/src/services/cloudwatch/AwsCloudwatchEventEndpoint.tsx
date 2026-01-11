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
  routing_config: resolvableValue(z.object({
    failover_config: z.object({
      primary: z.object({
        health_check: z.string().optional(),
      }),
      secondary: z.object({
        route: z.string().optional(),
      }),
    }),
  })),
  description: resolvableValue(z.string().optional()),
  event_bus: resolvableValue(
    z.object({
      event_bus_arn: z.string(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  replication_config: resolvableValue(
    z.object({
      state: z.string().optional(),
    }).optional(),
  ),
  role_arn: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  endpoint_url: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudwatch_event_endpoint

export function AwsCloudwatchEventEndpoint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_event_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchEventEndpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCloudwatchEventEndpoint,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchEventEndpoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCloudwatchEventEndpoint,
    idFilter,
    baseNode,
    optional,
  )
