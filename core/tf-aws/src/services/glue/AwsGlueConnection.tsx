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

export const InputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  athena_properties: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  authentication_configuration: resolvableValue(
    z.object({
      authentication_type: z.string(),
      custom_authentication_credentials: z.record(z.string(), z.string())
        .optional(),
      kms_key_arn: z.string().optional(),
      secret_arn: z.string().optional(),
      basic_authentication_credentials: z.object({
        password: z.string(),
        username: z.string(),
      }).optional(),
      oauth2_properties: z.object({
        oauth2_grant_type: z.string().optional(),
        token_url: z.string().optional(),
        token_url_parameters_map: z.record(z.string(), z.string()).optional(),
        authorization_code_properties: z.object({
          authorization_code: z.string(),
          redirect_uri: z.string(),
        }).optional(),
        oauth2_client_application: z.object({
          aws_managed_client_application_reference: z.string().optional(),
          user_managed_client_application_client_id: z.string().optional(),
        }).optional(),
        oauth2_credentials: z.object({
          access_token: z.string().optional(),
          jwt_token: z.string().optional(),
          refresh_token: z.string().optional(),
          user_managed_client_application_client_secret: z.string().optional(),
        }).optional(),
      }).optional(),
    }).optional(),
  ),
  catalog_id: resolvableValue(z.string().optional()),
  connection_properties: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  connection_type: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  match_criteria: resolvableValue(z.string().array().optional()),
  physical_connection_requirements: resolvableValue(
    z.object({
      availability_zone: z.string().optional(),
      security_group_id_list: z.string().array().optional(),
      subnet_id: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/glue_connection

export function AwsGlueConnection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_connection'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGlueConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsGlueConnection, idFilter, baseNode, optional)

export const useAwsGlueConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsGlueConnection, idFilter, baseNode, optional)
