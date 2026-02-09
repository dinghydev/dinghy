import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAppmeshVirtualGateway } from './AwsAppmeshVirtualGateway.tsx'

export const InputSchema = TfMetaSchema.extend({
  mesh_name: resolvableValue(z.string()),
  mesh_owner: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_date: z.string().optional(),
  last_updated_date: z.string().optional(),
  mesh_owner: z.string().optional(),
  resource_owner: z.string().optional(),
  spec: z.object({
    backend_defaults: z.object({
      client_policy: z.object({
        tls: z.object({
          certificate: z.object({
            file: z.object({
              certificate_chain: z.string(),
              private_key: z.string(),
            }).array(),
            sds: z.object({
              secret_name: z.string(),
            }).array(),
          }).array(),
          enforce: z.boolean(),
          ports: z.set(z.number()),
          validation: z.object({
            subject_alternative_names: z.object({
              match: z.object({
                exact: z.set(z.string()),
              }).array(),
            }).array(),
            trust: z.object({
              acm: z.object({
                certificate_authority_arns: z.set(z.string()),
              }).array(),
              file: z.object({
                certificate_chain: z.string(),
              }).array(),
              sds: z.object({
                secret_name: z.string(),
              }).array(),
            }).array(),
          }).array(),
        }).array(),
      }).array(),
    }).array(),
    listener: z.object({
      connection_pool: z.object({
        grpc: z.object({
          max_requests: z.number(),
        }).array(),
        http: z.object({
          max_connections: z.number(),
          max_pending_requests: z.number(),
        }).array(),
        http2: z.object({
          max_requests: z.number(),
        }).array(),
      }).array(),
      health_check: z.object({
        healthy_threshold: z.number(),
        interval_millis: z.number(),
        path: z.string(),
        port: z.number(),
        protocol: z.string(),
        timeout_millis: z.number(),
        unhealthy_threshold: z.number(),
      }).array(),
      port_mapping: z.object({
        port: z.number(),
        protocol: z.string(),
      }).array(),
      tls: z.object({
        certificate: z.object({
          acm: z.object({
            certificate_arn: z.string(),
          }).array(),
          file: z.object({
            certificate_chain: z.string(),
            private_key: z.string(),
          }).array(),
          sds: z.object({
            secret_name: z.string(),
          }).array(),
        }).array(),
        mode: z.string(),
        validation: z.object({
          subject_alternative_names: z.object({
            match: z.object({
              exact: z.set(z.string()),
            }).array(),
          }).array(),
          trust: z.object({
            file: z.object({
              certificate_chain: z.string(),
            }).array(),
            sds: z.object({
              secret_name: z.string(),
            }).array(),
          }).array(),
        }).array(),
      }).array(),
    }).array(),
    logging: z.object({
      access_log: z.object({
        file: z.object({
          format: z.object({
            json: z.object({
              key: z.string(),
              value: z.string(),
            }).array(),
            text: z.string(),
          }).array(),
          path: z.string(),
        }).array(),
      }).array(),
    }).array(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/appmesh_virtual_gateway

export function DataAwsAppmeshVirtualGateway(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsAppmeshVirtualGateway
      _type='aws_appmesh_virtual_gateway'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAppmeshVirtualGateway = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsAppmeshVirtualGateway,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsAppmeshVirtualGateways = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsAppmeshVirtualGateway,
    idFilter,
    baseNode,
    optional,
  )
