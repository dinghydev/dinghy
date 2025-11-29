import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appflow_connector_profile

export const InputSchema = z.object({
  connection_mode: resolvableValue(z.string()),
  connector_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  connector_label: resolvableValue(z.string().optional()),
  connector_profile_config: resolvableValue(z.object({
    connector_profile_credentials: z.object({
      amplitude: z.object({
        api_key: z.string(),
        secret_key: z.string(),
      }).optional(),
      custom_connector: z.object({
        authentication_type: z.string(),
      }).optional(),
      datadog: z.object({
        api_key: z.string(),
        application_key: z.string(),
      }).optional(),
      dynatrace: z.object({
        api_token: z.string(),
      }).optional(),
      google_analytics: z.object({
        access_token: z.string().optional(),
        client_id: z.string(),
        client_secret: z.string(),
        refresh_token: z.string().optional(),
      }).optional(),
      honeycode: z.object({
        access_token: z.string().optional(),
        refresh_token: z.string().optional(),
      }).optional(),
      infor_nexus: z.object({
        access_key_id: z.string(),
        datakey: z.string(),
        secret_access_key: z.string(),
        user_id: z.string(),
      }).optional(),
      marketo: z.object({
        access_token: z.string().optional(),
        client_id: z.string(),
        client_secret: z.string(),
      }).optional(),
      redshift: z.object({
        password: z.string(),
        username: z.string(),
      }).optional(),
      salesforce: z.object({
        access_token: z.string().optional(),
        client_credentials_arn: z.string().optional(),
        jwt_token: z.string().optional(),
        oauth2_grant_type: z.string().optional(),
        refresh_token: z.string().optional(),
      }).optional(),
      sapo_data: z.object({
        basic_auth_credentials: z.object({
          password: z.string(),
          username: z.string(),
        }).optional(),
        oauth_credentials: z.object({
          access_token: z.string().optional(),
          client_id: z.string(),
          client_secret: z.string(),
          refresh_token: z.string().optional(),
        }).optional(),
      }).optional(),
      service_now: z.object({
        password: z.string(),
        username: z.string(),
      }).optional(),
      singular: z.object({
        api_key: z.string(),
      }).optional(),
      slack: z.object({
        access_token: z.string().optional(),
        client_id: z.string(),
        client_secret: z.string(),
      }).optional(),
      snowflake: z.object({
        password: z.string(),
        username: z.string(),
      }).optional(),
      trendmicro: z.object({
        api_secret_key: z.string(),
      }).optional(),
      veeva: z.object({
        password: z.string(),
        username: z.string(),
      }).optional(),
      zendesk: z.object({
        access_token: z.string().optional(),
        client_id: z.string(),
        client_secret: z.string(),
      }).optional(),
    }),
    connector_profile_properties: z.object({
      amplitude: z.object({}),
      custom_connector: z.object({
        profile_properties: z.record(z.string(), z.string()).optional(),
      }).optional(),
      datadog: z.object({
        instance_url: z.string(),
      }).optional(),
      dynatrace: z.object({
        instance_url: z.string(),
      }).optional(),
      google_analytics: z.object({}),
      honeycode: z.object({}),
      infor_nexus: z.object({
        instance_url: z.string(),
      }).optional(),
      marketo: z.object({
        instance_url: z.string(),
      }).optional(),
      redshift: z.object({
        bucket_name: z.string(),
        bucket_prefix: z.string().optional(),
        cluster_identifier: z.string().optional(),
        data_api_role_arn: z.string().optional(),
        database_name: z.string().optional(),
        database_url: z.string().optional(),
        role_arn: z.string(),
      }).optional(),
      salesforce: z.object({
        instance_url: z.string().optional(),
        is_sandbox_environment: z.boolean().optional(),
        use_privatelink_for_metadata_and_authorization: z.boolean().optional(),
      }).optional(),
      sapo_data: z.object({
        application_host_url: z.string(),
        application_service_path: z.string(),
        client_number: z.string(),
        logon_language: z.string().optional(),
        port_number: z.number(),
        private_link_service_name: z.string().optional(),
      }).optional(),
      service_now: z.object({
        instance_url: z.string(),
      }).optional(),
      singular: z.object({}),
      slack: z.object({
        instance_url: z.string(),
      }).optional(),
      snowflake: z.object({
        account_name: z.string().optional(),
        bucket_name: z.string(),
        bucket_prefix: z.string().optional(),
        private_link_service_name: z.string().optional(),
        region: z.string().optional(),
        stage: z.string(),
        warehouse: z.string(),
      }).optional(),
      trendmicro: z.object({}),
      veeva: z.object({
        instance_url: z.string(),
      }).optional(),
      zendesk: z.object({
        instance_url: z.string(),
      }).optional(),
    }),
  })),
  id: resolvableValue(z.string().optional()),
  kms_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  credentials_arn: z.string().optional(),
})

export const ImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAppflowConnectorProfile(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appflow_connector_profile'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsAppflowConnectorProfile = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppflowConnectorProfile, node, id)

export const useAwsAppflowConnectorProfiles = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAppflowConnectorProfile, node, id)
