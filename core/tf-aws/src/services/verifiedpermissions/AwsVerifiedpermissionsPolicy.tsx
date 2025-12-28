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
  id: resolvableValue(z.string()),
  policy_store_id: resolvableValue(z.string()),
  definition: resolvableValue(
    z.object({
      static: z.object({
        description: z.string().optional(),
        statement: z.string(),
      }).array().optional(),
      template_linked: z.object({
        policy_template_id: z.string(),
        principal: z.object({
          entity_id: z.string(),
          entity_type: z.string(),
        }).array().optional(),
        resource: z.object({
          entity_id: z.string(),
          entity_type: z.string(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  created_date: z.string().optional(),
  policy_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/verifiedpermissions_policy

export function AwsVerifiedpermissionsPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_verifiedpermissions_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVerifiedpermissionsPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsVerifiedpermissionsPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVerifiedpermissionsPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsVerifiedpermissionsPolicy,
    idFilter,
    baseNode,
    optional,
  )
