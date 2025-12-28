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
  kms_server_side_encryption: resolvableValue(
    z.object({
      kms_key_id: z.string().optional(),
      opt_in_status: z.string().optional(),
      type: z.string().optional(),
    }).array().optional(),
  ),
  logs_anomaly_detection: resolvableValue(
    z.object({
      opt_in_status: z.string().optional(),
    }).array().optional(),
  ),
  ops_center: resolvableValue(
    z.object({
      opt_in_status: z.string().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/devopsguru_service_integration

export function AwsDevopsguruServiceIntegration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsDevopsguruServiceIntegration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsDevopsguruServiceIntegration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDevopsguruServiceIntegrations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsDevopsguruServiceIntegration,
    idFilter,
    baseNode,
    optional,
  )
