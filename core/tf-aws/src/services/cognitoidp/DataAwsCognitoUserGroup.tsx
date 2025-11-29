import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCognitoUserGroup } from './AwsCognitoUserGroup.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cognito_user_group

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  user_pool_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  description: z.string().optional(),
  id: z.string().optional(),
  precedence: z.number().optional(),
  role_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCognitoUserGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsCognitoUserGroup
      _type='aws_cognito_user_group'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCognitoUserGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsCognitoUserGroup, node, id)

export const useDataAwsCognitoUserGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsCognitoUserGroup, node, id)
