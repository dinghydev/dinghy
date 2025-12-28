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
  mesh_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  spec: resolvableValue(z.object({
    priority: z.number().optional(),
    grpc_route: z.object({
      action: z.object({
        target: z.object({
          port: z.number().optional(),
          virtual_service: z.object({
            virtual_service_name: z.string(),
          }),
        }),
      }),
      match: z.object({
        port: z.number().optional(),
        service_name: z.string(),
      }),
    }).optional(),
    http2_route: z.object({
      action: z.object({
        rewrite: z.object({
          hostname: z.object({
            default_target_hostname: z.string(),
          }).optional(),
          path: z.object({
            exact: z.string(),
          }).optional(),
          prefix: z.object({
            default_prefix: z.string().optional(),
            value: z.string().optional(),
          }).optional(),
        }).optional(),
        target: z.object({
          port: z.number().optional(),
          virtual_service: z.object({
            virtual_service_name: z.string(),
          }),
        }),
      }),
      match: z.object({
        port: z.number().optional(),
        prefix: z.string().optional(),
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
        hostname: z.object({
          exact: z.string().optional(),
          suffix: z.string().optional(),
        }).optional(),
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
    }).optional(),
    http_route: z.object({
      action: z.object({
        rewrite: z.object({
          hostname: z.object({
            default_target_hostname: z.string(),
          }).optional(),
          path: z.object({
            exact: z.string(),
          }).optional(),
          prefix: z.object({
            default_prefix: z.string().optional(),
            value: z.string().optional(),
          }).optional(),
        }).optional(),
        target: z.object({
          port: z.number().optional(),
          virtual_service: z.object({
            virtual_service_name: z.string(),
          }),
        }),
      }),
      match: z.object({
        port: z.number().optional(),
        prefix: z.string().optional(),
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
        hostname: z.object({
          exact: z.string().optional(),
          suffix: z.string().optional(),
        }).optional(),
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
    }).optional(),
  })),
  virtual_gateway_name: resolvableValue(z.string()),
  mesh_owner: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appmesh_gateway_route

export function AwsAppmeshGatewayRoute(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appmesh_gateway_route'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppmeshGatewayRoute = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsAppmeshGatewayRoute,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppmeshGatewayRoutes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsAppmeshGatewayRoute,
    idFilter,
    baseNode,
    optional,
  )
