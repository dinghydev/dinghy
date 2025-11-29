import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appmesh_virtual_node

export const InputSchema = z.object({
  mesh_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  mesh_owner: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  spec: resolvableValue(z.object({
    backend: z.object({
      virtual_service: z.object({
        virtual_service_name: z.string(),
      }),
    }).array().optional(),
    backend_defaults: z.object({
      client_policy: z.object({
        tls: z.object({
          enforce: z.boolean().optional(),
          ports: z.number().array().optional(),
        }).optional(),
      }).optional(),
    }).optional(),
    listener: z.object({
      connection_pool: z.object({
        grpc: z.object({
          max_requests: z.number(),
        }).optional(),
        http: z.object({
          max_connections: z.number(),
          max_pending_requests: z.number().optional(),
        }).optional(),
        http2: z.object({
          max_requests: z.number(),
        }).optional(),
        tcp: z.object({
          max_connections: z.number(),
        }).optional(),
      }).optional(),
      health_check: z.object({
        healthy_threshold: z.number(),
        interval_millis: z.number(),
        path: z.string().optional(),
        port: z.number().optional(),
        protocol: z.string(),
        timeout_millis: z.number(),
        unhealthy_threshold: z.number(),
      }).optional(),
      outlier_detection: z.object({
        max_ejection_percent: z.number(),
        max_server_errors: z.number(),
      }).optional(),
      port_mapping: z.object({
        port: z.number(),
        protocol: z.string(),
      }),
      timeout: z.object({
        grpc: z.object({
          idle: z.object({
            unit: z.string(),
            value: z.number(),
          }).optional(),
          per_request: z.object({
            unit: z.string(),
            value: z.number(),
          }).optional(),
        }).optional(),
        http: z.object({
          idle: z.object({
            unit: z.string(),
            value: z.number(),
          }).optional(),
          per_request: z.object({
            unit: z.string(),
            value: z.number(),
          }).optional(),
        }).optional(),
        http2: z.object({
          idle: z.object({
            unit: z.string(),
            value: z.number(),
          }).optional(),
          per_request: z.object({
            unit: z.string(),
            value: z.number(),
          }).optional(),
        }).optional(),
        tcp: z.object({
          idle: z.object({
            unit: z.string(),
            value: z.number(),
          }).optional(),
        }).optional(),
      }).optional(),
      tls: z.object({
        mode: z.string(),
      }).optional(),
    }).optional(),
    logging: z.object({
      access_log: z.object({
        file: z.object({
          path: z.string(),
        }).optional(),
      }).optional(),
    }).optional(),
    service_discovery: z.object({
      aws_cloud_map: z.object({
        attributes: z.record(z.string(), z.string()).optional(),
        namespace_name: z.string(),
        service_name: z.string(),
      }).optional(),
      dns: z.object({
        hostname: z.string(),
        ip_preference: z.string().optional(),
        response_type: z.string().optional(),
      }).optional(),
    }).optional(),
  })),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_date: z.string().optional(),
  id: z.string().optional(),
  last_updated_date: z.string().optional(),
  resource_owner: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAppmeshVirtualNode(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appmesh_virtual_node'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppmeshVirtualNode = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppmeshVirtualNode, node, id)

export const useAwsAppmeshVirtualNodes = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAppmeshVirtualNode, node, id)
