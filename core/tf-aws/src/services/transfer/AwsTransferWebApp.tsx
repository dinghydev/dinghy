import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/transfer_web_app

export const InputSchema = z.object({
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  access_endpoint: resolvableValue(z.string().optional()),
  identity_provider_details: resolvableValue(
    z.object({
      identity_center_config: z.object({
        application_arn: z.string(),
        instance_arn: z.string().optional(),
        role: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  web_app_endpoint_policy: resolvableValue(z.string().optional()),
  web_app_units: resolvableValue(
    z.object({
      provisioned: z.number(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  web_app_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsTransferWebApp(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transfer_web_app'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsTransferWebApp = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsTransferWebApp, node, id)

export const useAwsTransferWebApps = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsTransferWebApp, node, id)
