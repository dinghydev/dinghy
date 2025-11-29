import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/codebuild_source_credential

export const InputSchema = z.object({
  auth_type: resolvableValue(z.string()),
  server_type: resolvableValue(z.string()),
  token: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  user_name: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCodebuildSourceCredential(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codebuild_source_credential'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsCodebuildSourceCredential = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCodebuildSourceCredential, node, id)

export const useAwsCodebuildSourceCredentials = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCodebuildSourceCredential, node, id)
