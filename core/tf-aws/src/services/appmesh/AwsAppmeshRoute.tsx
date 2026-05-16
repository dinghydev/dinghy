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

export const AwsAppmeshRouteInputSchema = TfMetaSchema.extend({
  mesh_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  spec: resolvableValue(z.object({
    priority: z.number().optional(),
    grpc_route: z.object({
      action: z.object({
        weighted_target: z.object({
          port: z.number().optional(),
          virtual_node: z.string(),
          weight: z.number(),
        }).array(),
      }),
      match: z.object({
        method_name: z.string().optional(),
        port: z.number().optional(),
        prefix: z.string().optional(),
        service_name: z.string().optional(),
        metadata: z.object({
          invert: z.boolean().optional(),
          name: z.string(),
          match: z.object({
            exact: z.string().optional(),
            prefix: z.string().optional(),
            regex: z.string().optional(),
            suffix: z.string().optional(),
            range: z.object({
              end: z.number(),
              start: z.number(),
            }).optional(),
          }).optional(),
        }).array().optional(),
      }).optional(),
      retry_policy: z.object({
        grpc_retry_events: z.string().array().optional(),
        http_retry_events: z.string().array().optional(),
        max_retries: z.number(),
        tcp_retry_events: z.string().array().optional(),
        per_retry_timeout: z.object({
          unit: z.string(),
          value: z.number(),
        }),
      }).optional(),
      timeout: z.object({
        idle: z.object({
          unit: z.string(),
          value: z.number(),
        }).optional(),
        per_request: z.object({
          unit: z.string(),
          value: z.number(),
        }).optional(),
      }).optional(),
    }).optional(),
    http2_route: z.object({
      action: z.object({
        weighted_target: z.object({
          port: z.number().optional(),
          virtual_node: z.string(),
          weight: z.number(),
        }).array(),
      }),
      match: z.object({
        method: z.string().optional(),
        port: z.number().optional(),
        prefix: z.string().optional(),
        scheme: z.string().optional(),
        header: z.object({
          invert: z.boolean().optional(),
          name: z.string(),
          match: z.object({
            exact: z.string().optional(),
            prefix: z.string().optional(),
            regex: z.string().optional(),
            suffix: z.string().optional(),
            range: z.object({
              end: z.number(),
              start: z.number(),
            }).optional(),
          }).optional(),
        }).array().optional(),
        path: z.object({
          exact: z.string().optional(),
          regex: z.string().optional(),
        }).optional(),
        query_parameter: z.object({
          name: z.string(),
          match: z.object({
            exact: z.string().optional(),
          }).optional(),
        }).array().optional(),
      }),
      retry_policy: z.object({
        http_retry_events: z.string().array().optional(),
        max_retries: z.number(),
        tcp_retry_events: z.string().array().optional(),
        per_retry_timeout: z.object({
          unit: z.string(),
          value: z.number(),
        }),
      }).optional(),
      timeout: z.object({
        idle: z.object({
          unit: z.string(),
          value: z.number(),
        }).optional(),
        per_request: z.object({
          unit: z.string(),
          value: z.number(),
        }).optional(),
      }).optional(),
    }).optional(),
    http_route: z.object({
      action: z.object({
        weighted_target: z.object({
          port: z.number().optional(),
          virtual_node: z.string(),
          weight: z.number(),
        }).array(),
      }),
      match: z.object({
        method: z.string().optional(),
        port: z.number().optional(),
        prefix: z.string().optional(),
        scheme: z.string().optional(),
        header: z.object({
          invert: z.boolean().optional(),
          name: z.string(),
          match: z.object({
            exact: z.string().optional(),
            prefix: z.string().optional(),
            regex: z.string().optional(),
            suffix: z.string().optional(),
            range: z.object({
              end: z.number(),
              start: z.number(),
            }).optional(),
          }).optional(),
        }).array().optional(),
        path: z.object({
          exact: z.string().optional(),
          regex: z.string().optional(),
        }).optional(),
        query_parameter: z.object({
          name: z.string(),
          match: z.object({
            exact: z.string().optional(),
          }).optional(),
        }).array().optional(),
      }),
      retry_policy: z.object({
        http_retry_events: z.string().array().optional(),
        max_retries: z.number(),
        tcp_retry_events: z.string().array().optional(),
        per_retry_timeout: z.object({
          unit: z.string(),
          value: z.number(),
        }),
      }).optional(),
      timeout: z.object({
        idle: z.object({
          unit: z.string(),
          value: z.number(),
        }).optional(),
        per_request: z.object({
          unit: z.string(),
          value: z.number(),
        }).optional(),
      }).optional(),
    }).optional(),
    tcp_route: z.object({
      action: z.object({
        weighted_target: z.object({
          port: z.number().optional(),
          virtual_node: z.string(),
          weight: z.number(),
        }).array(),
      }),
      match: z.object({
        port: z.number().optional(),
      }).optional(),
      timeout: z.object({
        idle: z.object({
          unit: z.string(),
          value: z.number(),
        }).optional(),
      }).optional(),
    }).optional(),
  })),
  virtual_router_name: resolvableValue(z.string()),
  mesh_owner: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsAppmeshRouteOutputSchema = z.object({
  arn: z.string().optional(),
  created_date: z.string().optional(),
  id: z.string().optional(),
  last_updated_date: z.string().optional(),
  resource_owner: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsAppmeshRouteInputProps =
  & z.input<typeof AwsAppmeshRouteInputSchema>
  & NodeProps

export type AwsAppmeshRouteOutputProps =
  & z.output<typeof AwsAppmeshRouteOutputSchema>
  & z.output<typeof AwsAppmeshRouteInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appmesh_route

export function AwsAppmeshRoute(props: Partial<AwsAppmeshRouteInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appmesh_route'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppmeshRouteInputSchema}
      _outputSchema={AwsAppmeshRouteOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppmeshRoute = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppmeshRouteOutputProps>(
    AwsAppmeshRoute,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppmeshRoutes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppmeshRouteOutputProps>(
    AwsAppmeshRoute,
    idFilter,
    baseNode,
    optional,
  )
