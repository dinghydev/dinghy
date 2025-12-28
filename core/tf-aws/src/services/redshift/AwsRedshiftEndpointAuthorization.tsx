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
  account: resolvableValue(z.string()),
  cluster_identifier: resolvableValue(z.string()),
  force_delete: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  vpc_ids: resolvableValue(z.string().array().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  allowed_all_vpcs: z.boolean().optional(),
  endpoint_count: z.number().optional(),
  grantee: z.string().optional(),
  grantor: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/redshift_endpoint_authorization

export function AwsRedshiftEndpointAuthorization(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_endpoint_authorization'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftEndpointAuthorization = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsRedshiftEndpointAuthorization,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftEndpointAuthorizations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsRedshiftEndpointAuthorization,
    idFilter,
    baseNode,
    optional,
  )
