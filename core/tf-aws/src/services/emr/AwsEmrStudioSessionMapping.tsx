import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/emr_studio_session_mapping

export const InputSchema = z.object({
  identity_type: resolvableValue(z.string()),
  session_policy_arn: resolvableValue(z.string()),
  studio_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  identity_id: resolvableValue(z.string().optional()),
  identity_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEmrStudioSessionMapping(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_emr_studio_session_mapping'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEmrStudioSessionMapping = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEmrStudioSessionMapping, node, id)

export const useAwsEmrStudioSessionMappings = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEmrStudioSessionMapping, node, id)
