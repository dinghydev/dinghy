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

export const AwsIotAuthorizerInputSchema = TfMetaSchema.extend({
  authorizer_function_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  enable_caching_for_http: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  signing_disabled: resolvableValue(z.boolean().optional()),
  status: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  token_key_name: resolvableValue(z.string().optional()),
  token_signing_public_keys: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
})

export const AwsIotAuthorizerOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsIotAuthorizerInputProps =
  & z.input<typeof AwsIotAuthorizerInputSchema>
  & NodeProps

export type AwsIotAuthorizerOutputProps =
  & z.output<typeof AwsIotAuthorizerOutputSchema>
  & z.output<typeof AwsIotAuthorizerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iot_authorizer

export function AwsIotAuthorizer(props: Partial<AwsIotAuthorizerInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_authorizer'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIotAuthorizerInputSchema}
      _outputSchema={AwsIotAuthorizerOutputSchema}
      {...props}
    />
  )
}

export const useAwsIotAuthorizer = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIotAuthorizerOutputProps>(
    AwsIotAuthorizer,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIotAuthorizers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIotAuthorizerOutputProps>(
    AwsIotAuthorizer,
    idFilter,
    baseNode,
    optional,
  )
