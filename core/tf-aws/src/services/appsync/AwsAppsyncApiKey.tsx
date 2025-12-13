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
  __key: resolvableValue(z.string()),
  api_id: resolvableValue(z.string()),
  api_key_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  expires: resolvableValue(z.string().optional()),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appsync_api_key

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

export const useAwsAppsyncApiKey = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsAppsyncApiKey, idFilter, baseNode)

export const useAwsAppsyncApiKeys = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsAppsyncApiKey, idFilter, baseNode)
