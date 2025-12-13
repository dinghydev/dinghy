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
  instance_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  quick_connect_config: resolvableValue(z.object({
    quick_connect_type: z.string(),
    phone_config: z.object({
      phone_number: z.string(),
    }).array().optional(),
    queue_config: z.object({
      contact_flow_id: z.string(),
      queue_id: z.string(),
    }).array().optional(),
    user_config: z.object({
      contact_flow_id: z.string(),
      user_id: z.string(),
    }).array().optional(),
  })),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  quick_connect_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/connect_quick_connect

export function AwsConnectQuickConnect(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_connect_quick_connect'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsConnectQuickConnect = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsConnectQuickConnect, idFilter, baseNode)

export const useAwsConnectQuickConnects = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsConnectQuickConnect, idFilter, baseNode)
