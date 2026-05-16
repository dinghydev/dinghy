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

export const AwsDevopsguruServiceIntegrationInputSchema = TfMetaSchema.extend({
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
})

export const AwsDevopsguruServiceIntegrationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsDevopsguruServiceIntegrationInputProps =
  & z.input<typeof AwsDevopsguruServiceIntegrationInputSchema>
  & NodeProps

export type AwsDevopsguruServiceIntegrationOutputProps =
  & z.output<typeof AwsDevopsguruServiceIntegrationOutputSchema>
  & z.output<typeof AwsDevopsguruServiceIntegrationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/devopsguru_service_integration

export function AwsDevopsguruServiceIntegration(
  props: Partial<AwsDevopsguruServiceIntegrationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_devopsguru_service_integration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDevopsguruServiceIntegrationInputSchema}
      _outputSchema={AwsDevopsguruServiceIntegrationOutputSchema}
      {...props}
    />
  )
}

export const useAwsDevopsguruServiceIntegration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDevopsguruServiceIntegrationOutputProps>(
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
  useTypedNodes<AwsDevopsguruServiceIntegrationOutputProps>(
    AwsDevopsguruServiceIntegration,
    idFilter,
    baseNode,
    optional,
  )
