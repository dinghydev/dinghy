import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appsync_api_key

export const InputSchema = z.object({
  __key: resolvableValue(z.string()),
  api_id: resolvableValue(z.string()),
  api_key_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  expires: resolvableValue(z.string().optional()),
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

export function AwsAppsyncApiKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appsync_api_key'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppsyncApiKey = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppsyncApiKey, node, id)

export const useAwsAppsyncApiKeys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAppsyncApiKey, node, id)
