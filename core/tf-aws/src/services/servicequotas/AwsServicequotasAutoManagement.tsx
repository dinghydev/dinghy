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

export const AwsServicequotasAutoManagementInputSchema = TfMetaSchema.extend({
  opt_in_level: resolvableValue(z.string()),
  opt_in_type: resolvableValue(z.string()),
  exclusion_list: resolvableValue(
    z.record(z.string(), z.string().array()).optional(),
  ),
  notification_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsServicequotasAutoManagementOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsServicequotasAutoManagementInputProps =
  & z.input<typeof AwsServicequotasAutoManagementInputSchema>
  & NodeProps

export type AwsServicequotasAutoManagementOutputProps =
  & z.output<typeof AwsServicequotasAutoManagementOutputSchema>
  & z.output<typeof AwsServicequotasAutoManagementInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/servicequotas_auto_management

export function AwsServicequotasAutoManagement(
  props: Partial<AwsServicequotasAutoManagementInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicequotas_auto_management'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServicequotasAutoManagementInputSchema}
      _outputSchema={AwsServicequotasAutoManagementOutputSchema}
      {...props}
    />
  )
}

export const useAwsServicequotasAutoManagement = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsServicequotasAutoManagementOutputProps>(
    AwsServicequotasAutoManagement,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServicequotasAutoManagements = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsServicequotasAutoManagementOutputProps>(
    AwsServicequotasAutoManagement,
    idFilter,
    baseNode,
    optional,
  )
