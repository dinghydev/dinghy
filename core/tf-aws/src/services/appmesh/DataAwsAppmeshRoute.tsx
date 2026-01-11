import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAppmeshRoute } from './AwsAppmeshRoute.tsx'

export const InputSchema = z.object({
  mesh_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  virtual_router_name: resolvableValue(z.string()),
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
    grpc_route: z.object({
      action: z.object({
        weighted_target: z.set(z.object({
          port: z.number(),
          virtual_node: z.string(),
          weight: z.number(),
        })),
      }).array(),
      match: z.object({
        metadata: z.set(z.object({
          invert: z.boolean(),
          match: z.object({
            exact: z.string(),
            prefix: z.string(),
            range: z.object({
              end: z.number(),
              start: z.number(),
            }).array(),
            regex: z.string(),
            suffix: z.string(),
          }).array(),
          name: z.string(),
        })),
        method_name: z.string(),
        port: z.number(),
        prefix: z.string(),
        service_name: z.string(),
      }).array(),
      retry_policy: z.object({
        grpc_retry_events: z.set(z.string()),
        http_retry_events: z.set(z.string()),
        max_retries: z.number(),
        per_retry_timeout: z.object({
          unit: z.string(),
          value: z.number(),
        }).array(),
        tcp_retry_events: z.set(z.string()),
      }).array(),
      timeout: z.object({
        idle: z.object({
          unit: z.string(),
          value: z.number(),
        }).array(),
        per_request: z.object({
          unit: z.string(),
          value: z.number(),
        }).array(),
      }).array(),
    }).array(),
    http2_route: z.object({
      action: z.object({
        weighted_target: z.set(z.object({
          port: z.number(),
          virtual_node: z.string(),
          weight: z.number(),
        })),
      }).array(),
      match: z.object({
        header: z.set(z.object({
          invert: z.boolean(),
          match: z.object({
            exact: z.string(),
            prefix: z.string(),
            range: z.object({
              end: z.number(),
              start: z.number(),
            }).array(),
            regex: z.string(),
            suffix: z.string(),
          }).array(),
          name: z.string(),
        })),
        method: z.string(),
        path: z.object({
          exact: z.string(),
          regex: z.string(),
        }).array(),
        port: z.number(),
        prefix: z.string(),
        query_parameter: z.set(z.object({
          match: z.object({
            exact: z.string(),
          }).array(),
          name: z.string(),
        })),
        scheme: z.string(),
      }).array(),
      retry_policy: z.object({
        http_retry_events: z.set(z.string()),
        max_retries: z.number(),
        per_retry_timeout: z.object({
          unit: z.string(),
          value: z.number(),
        }).array(),
        tcp_retry_events: z.set(z.string()),
      }).array(),
      timeout: z.object({
        idle: z.object({
          unit: z.string(),
          value: z.number(),
        }).array(),
        per_request: z.object({
          unit: z.string(),
          value: z.number(),
        }).array(),
      }).array(),
    }).array(),
    http_route: z.object({
      action: z.object({
        weighted_target: z.set(z.object({
          port: z.number(),
          virtual_node: z.string(),
          weight: z.number(),
        })),
      }).array(),
      match: z.object({
        header: z.set(z.object({
          invert: z.boolean(),
          match: z.object({
            exact: z.string(),
            prefix: z.string(),
            range: z.object({
              end: z.number(),
              start: z.number(),
            }).array(),
            regex: z.string(),
            suffix: z.string(),
          }).array(),
          name: z.string(),
        })),
        method: z.string(),
        path: z.object({
          exact: z.string(),
          regex: z.string(),
        }).array(),
        port: z.number(),
        prefix: z.string(),
        query_parameter: z.set(z.object({
          match: z.object({
            exact: z.string(),
          }).array(),
          name: z.string(),
        })),
        scheme: z.string(),
      }).array(),
      retry_policy: z.object({
        http_retry_events: z.set(z.string()),
        max_retries: z.number(),
        per_retry_timeout: z.object({
          unit: z.string(),
          value: z.number(),
        }).array(),
        tcp_retry_events: z.set(z.string()),
      }).array(),
      timeout: z.object({
        idle: z.object({
          unit: z.string(),
          value: z.number(),
        }).array(),
        per_request: z.object({
          unit: z.string(),
          value: z.number(),
        }).array(),
      }).array(),
    }).array(),
    priority: z.number(),
    tcp_route: z.object({
      action: z.object({
        weighted_target: z.set(z.object({
          port: z.number(),
          virtual_node: z.string(),
          weight: z.number(),
        })),
      }).array(),
      match: z.object({
        port: z.number(),
      }).array(),
      timeout: z.object({
        idle: z.object({
          unit: z.string(),
          value: z.number(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/appmesh_route

export function DataAwsAppmeshRoute(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsAppmeshRoute
      _type='aws_appmesh_route'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAppmeshRoute = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(DataAwsAppmeshRoute, idFilter, baseNode, optional)

export const useDataAwsAppmeshRoutes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(DataAwsAppmeshRoute, idFilter, baseNode, optional)
