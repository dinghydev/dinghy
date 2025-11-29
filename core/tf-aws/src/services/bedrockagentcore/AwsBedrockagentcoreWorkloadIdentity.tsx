import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrockagentcore_workload_identity

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  allowed_resource_oauth2_return_urls: resolvableValue(
    z.string().array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  workload_identity_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsBedrockagentcoreWorkloadIdentity(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagentcore_workload_identity'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentcoreWorkloadIdentity = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsBedrockagentcoreWorkloadIdentity, node, id)

export const useAwsBedrockagentcoreWorkloadIdentitys = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsBedrockagentcoreWorkloadIdentity, node, id)
