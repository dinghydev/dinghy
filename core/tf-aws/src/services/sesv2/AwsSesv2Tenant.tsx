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

export const AwsSesv2TenantInputSchema = TfMetaSchema.extend({
  tenant_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSesv2TenantOutputSchema = z.object({
  sending_status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  tenant_arn: z.string().optional(),
  tenant_id: z.string().optional(),
})

export type AwsSesv2TenantInputProps =
  & z.input<typeof AwsSesv2TenantInputSchema>
  & NodeProps

export type AwsSesv2TenantOutputProps =
  & z.output<typeof AwsSesv2TenantOutputSchema>
  & z.output<typeof AwsSesv2TenantInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_tenant

export function AwsSesv2Tenant(props: Partial<AwsSesv2TenantInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sesv2_tenant'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesv2TenantInputSchema}
      _outputSchema={AwsSesv2TenantOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesv2Tenant = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSesv2TenantOutputProps>(
    AwsSesv2Tenant,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesv2Tenants = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesv2TenantOutputProps>(
    AwsSesv2Tenant,
    idFilter,
    baseNode,
    optional,
  )
