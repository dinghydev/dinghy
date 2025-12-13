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
  access_grants_location_id: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  permission: resolvableValue(z.string()),
  access_grants_location_configuration: resolvableValue(
    z.object({
      s3_sub_prefix: z.string().optional(),
    }).array().optional(),
  ),
  account_id: resolvableValue(z.string().optional()),
  grantee: resolvableValue(
    z.object({
      grantee_identifier: z.string(),
      grantee_type: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  s3_prefix_type: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  access_grant_arn: z.string().optional(),
  access_grant_id: z.string().optional(),
  grant_scope: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3control_access_grant

export function AwsS3controlAccessGrant(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3control_access_grant'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3controlAccessGrant = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsS3controlAccessGrant, idFilter, baseNode)

export const useAwsS3controlAccessGrants = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsS3controlAccessGrant, idFilter, baseNode)
