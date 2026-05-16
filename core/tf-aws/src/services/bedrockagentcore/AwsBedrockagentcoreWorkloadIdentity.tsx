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

export const AwsBedrockagentcoreWorkloadIdentityInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    allowed_resource_oauth2_return_urls: resolvableValue(
      z.string().array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
  })

export const AwsBedrockagentcoreWorkloadIdentityOutputSchema = z.object({
  workload_identity_arn: z.string().optional(),
})

export type AwsBedrockagentcoreWorkloadIdentityInputProps =
  & z.input<typeof AwsBedrockagentcoreWorkloadIdentityInputSchema>
  & NodeProps

export type AwsBedrockagentcoreWorkloadIdentityOutputProps =
  & z.output<typeof AwsBedrockagentcoreWorkloadIdentityOutputSchema>
  & z.output<typeof AwsBedrockagentcoreWorkloadIdentityInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/bedrockagentcore_workload_identity

export function AwsBedrockagentcoreWorkloadIdentity(
  props: Partial<AwsBedrockagentcoreWorkloadIdentityInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagentcore_workload_identity'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBedrockagentcoreWorkloadIdentityInputSchema}
      _outputSchema={AwsBedrockagentcoreWorkloadIdentityOutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentcoreWorkloadIdentity = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBedrockagentcoreWorkloadIdentityOutputProps>(
    AwsBedrockagentcoreWorkloadIdentity,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBedrockagentcoreWorkloadIdentitys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBedrockagentcoreWorkloadIdentityOutputProps>(
    AwsBedrockagentcoreWorkloadIdentity,
    idFilter,
    baseNode,
    optional,
  )
