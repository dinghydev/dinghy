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
  workforce_name: resolvableValue(z.string()),
  cognito_config: resolvableValue(
    z.object({
      client_id: z.string(),
      user_pool: z.string(),
    }).optional(),
  ),
  oidc_config: resolvableValue(
    z.object({
      authentication_request_extra_params: z.record(z.string(), z.string())
        .optional(),
      authorization_endpoint: z.string(),
      client_id: z.string(),
      client_secret: z.string(),
      issuer: z.string(),
      jwks_uri: z.string(),
      logout_endpoint: z.string(),
      scope: z.string().optional(),
      token_endpoint: z.string(),
      user_info_endpoint: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  source_ip_config: resolvableValue(
    z.object({
      cidrs: z.string().array(),
    }).optional(),
  ),
  workforce_vpc_config: resolvableValue(
    z.object({
      security_group_ids: z.string().array().optional(),
      subnets: z.string().array().optional(),
      vpc_endpoint_id: z.string(),
      vpc_id: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  subdomain: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_workforce

export function AwsSagemakerWorkforce(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_workforce'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerWorkforce = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsSagemakerWorkforce, idFilter, baseNode, optional)

export const useAwsSagemakerWorkforces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsSagemakerWorkforce,
    idFilter,
    baseNode,
    optional,
  )
