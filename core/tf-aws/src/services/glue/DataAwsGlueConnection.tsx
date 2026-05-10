import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsGlueConnection } from './AwsGlueConnection.tsx'

export const InputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  athena_properties: z.record(z.string(), z.string()).optional(),
  authentication_configuration: z.object({
    authentication_type: z.string(),
    basic_authentication_credentials: z.object({
      password: z.string(),
      username: z.string(),
    }).array(),
    custom_authentication_credentials: z.record(z.string(), z.string()),
    kms_key_arn: z.string(),
    oauth2_properties: z.object({
      authorization_code_properties: z.object({
        authorization_code: z.string(),
        redirect_uri: z.string(),
      }).array(),
      oauth2_client_application: z.object({
        aws_managed_client_application_reference: z.string(),
        user_managed_client_application_client_id: z.string(),
      }).array(),
      oauth2_credentials: z.object({
        access_token: z.string(),
        jwt_token: z.string(),
        refresh_token: z.string(),
        user_managed_client_application_client_secret: z.string(),
      }).array(),
      oauth2_grant_type: z.string(),
      token_url: z.string(),
      token_url_parameters_map: z.record(z.string(), z.string()),
    }).array(),
    secret_arn: z.string(),
  }).array().optional(),
  catalog_id: z.string().optional(),
  connection_properties: z.record(z.string(), z.string()).optional(),
  connection_type: z.string().optional(),
  description: z.string().optional(),
  match_criteria: z.string().array().optional(),
  name: z.string().optional(),
  physical_connection_requirements: z.object({
    availability_zone: z.string(),
    security_group_id_list: z.set(z.string()),
    subnet_id: z.string(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/glue_connection

export function DataAwsGlueConnection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsGlueConnection
      _type='aws_glue_connection'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsGlueConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(DataAwsGlueConnection, idFilter, baseNode, optional)

export const useDataAwsGlueConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsGlueConnection,
    idFilter,
    baseNode,
    optional,
  )
