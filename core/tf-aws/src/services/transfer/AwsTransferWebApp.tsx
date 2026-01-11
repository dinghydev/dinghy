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
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  access_endpoint: resolvableValue(z.string().optional()),
  endpoint_details: resolvableValue(
    z.object({
      vpc: z.object({
        security_group_ids: z.string().array().optional(),
        subnet_ids: z.string().array(),
        vpc_endpoint_id: z.string(),
        vpc_id: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  identity_provider_details: resolvableValue(
    z.object({
      identity_center_config: z.object({
        application_arn: z.string(),
        instance_arn: z.string().optional(),
        role: z.string().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  web_app_endpoint_policy: resolvableValue(z.string().optional()),
  web_app_units: resolvableValue(
    z.object({
      provisioned: z.number(),
    }).array().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  endpoint_details: z.object({
    vpc: z.object({
      security_group_ids: z.set(z.string()).optional(),
      subnet_ids: z.set(z.string()),
      vpc_endpoint_id: z.string(),
      vpc_id: z.string(),
    }).array().optional(),
  }).array().optional().optional(),
  web_app_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app

export function AwsTransferWebApp(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsTransferWebApp = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsTransferWebApp, idFilter, baseNode, optional)

export const useAwsTransferWebApps = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsTransferWebApp, idFilter, baseNode, optional)
