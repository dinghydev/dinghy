import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/verifiedpermissions_schema

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  policy_store_id: resolvableValue(z.string()),
  definition: resolvableValue(
    z.object({
      value: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  namespaces: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVerifiedpermissionsSchema(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_verifiedpermissions_schema'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVerifiedpermissionsSchema = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsVerifiedpermissionsSchema, node, id)

export const useAwsVerifiedpermissionsSchemas = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsVerifiedpermissionsSchema, node, id)
