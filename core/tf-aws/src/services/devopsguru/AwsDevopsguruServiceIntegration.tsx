import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/devopsguru_service_integration

export const InputSchema = z.object({
  kms_server_side_encryption: resolvableValue(
    z.object({
      kms_key_id: z.string().optional(),
      opt_in_status: z.string().optional(),
      type: z.string().optional(),
    }).optional(),
  ),
  logs_anomaly_detection: resolvableValue(
    z.object({
      opt_in_status: z.string().optional(),
    }).optional(),
  ),
  ops_center: resolvableValue(
    z.object({
      opt_in_status: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
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

export function AwsDevopsguruServiceIntegration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_devopsguru_service_integration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDevopsguruServiceIntegration = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDevopsguruServiceIntegration, node, id)

export const useAwsDevopsguruServiceIntegrations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDevopsguruServiceIntegration, node, id)
