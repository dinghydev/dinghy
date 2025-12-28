import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAppmeshVirtualNode } from './AwsAppmeshVirtualNode.tsx'

export const InputSchema = z.object({
  mesh_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  mesh_owner: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_date: z.string().optional(),
  last_updated_date: z.string().optional(),
  resource_owner: z.string().optional(),
  spec: z.object({
    backend: z.set(z.object({
      virtual_service: z.object({
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
        virtual_service_name: z.string(),
      }).array(),
    })),
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
        tcp: z.object({
          max_connections: z.number(),
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
      outlier_detection: z.object({
        base_ejection_duration: z.object({
          unit: z.string(),
          value: z.number(),
        }).array(),
        interval: z.object({
          unit: z.string(),
          value: z.number(),
        }).array(),
        max_ejection_percent: z.number(),
        max_server_errors: z.number(),
      }).array(),
      port_mapping: z.object({
        port: z.number(),
        protocol: z.string(),
      }).array(),
      timeout: z.object({
        grpc: z.object({
          idle: z.object({
            unit: z.string(),
            value: z.number(),
          }).array(),
          per_request: z.object({
            unit: z.string(),
            value: z.number(),
          }).array(),
        }).array(),
        http: z.object({
          idle: z.object({
            unit: z.string(),
            value: z.number(),
          }).array(),
          per_request: z.object({
            unit: z.string(),
            value: z.number(),
          }).array(),
        }).array(),
        http2: z.object({
          idle: z.object({
            unit: z.string(),
            value: z.number(),
          }).array(),
          per_request: z.object({
            unit: z.string(),
            value: z.number(),
          }).array(),
        }).array(),
        tcp: z.object({
          idle: z.object({
            unit: z.string(),
            value: z.number(),
          }).array(),
        }).array(),
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
    service_discovery: z.object({
      aws_cloud_map: z.object({
        attributes: z.record(z.string(), z.string()),
        namespace_name: z.string(),
        service_name: z.string(),
      }).array(),
      dns: z.object({
        hostname: z.string(),
        ip_preference: z.string(),
        response_type: z.string(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/appmesh_virtual_node

export function DataAwsAppmeshVirtualNode(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsAppmeshVirtualNode
      _type='aws_appmesh_virtual_node'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAppmeshVirtualNode = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsAppmeshVirtualNode,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsAppmeshVirtualNodes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsAppmeshVirtualNode,
    idFilter,
    baseNode,
    optional,
  )
