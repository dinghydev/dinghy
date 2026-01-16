import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAppmeshGatewayRoute } from './AwsAppmeshGatewayRoute.tsx'

export const InputSchema = TfMetaSchema.extend({
  mesh_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  virtual_gateway_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  mesh_owner: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_date: z.string().optional(),
  last_updated_date: z.string().optional(),
  resource_owner: z.string().optional(),
  spec: z.object({
    grpc_route: z.object({
      action: z.object({
        target: z.object({
          port: z.number(),
          virtual_service: z.object({
            virtual_service_name: z.string(),
          }).array(),
        }).array(),
      }).array(),
      match: z.object({
        port: z.number(),
        service_name: z.string(),
      }).array(),
    }).array(),
    http2_route: z.object({
      action: z.object({
        rewrite: z.object({
          hostname: z.object({
            default_target_hostname: z.string(),
          }).array(),
          path: z.object({
            exact: z.string(),
          }).array(),
          prefix: z.object({
            default_prefix: z.string(),
            value: z.string(),
          }).array(),
        }).array(),
        target: z.object({
          port: z.number(),
          virtual_service: z.object({
            virtual_service_name: z.string(),
          }).array(),
        }).array(),
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
        hostname: z.object({
          exact: z.string(),
          suffix: z.string(),
        }).array(),
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
      }).array(),
    }).array(),
    http_route: z.object({
      action: z.object({
        rewrite: z.object({
          hostname: z.object({
            default_target_hostname: z.string(),
          }).array(),
          path: z.object({
            exact: z.string(),
          }).array(),
          prefix: z.object({
            default_prefix: z.string(),
            value: z.string(),
          }).array(),
        }).array(),
        target: z.object({
          port: z.number(),
          virtual_service: z.object({
            virtual_service_name: z.string(),
          }).array(),
        }).array(),
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
        hostname: z.object({
          exact: z.string(),
          suffix: z.string(),
        }).array(),
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
      }).array(),
    }).array(),
    priority: z.number(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/appmesh_gateway_route

export function DataAwsAppmeshGatewayRoute(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsAppmeshGatewayRoute
      _type='aws_appmesh_gateway_route'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAppmeshGatewayRoute = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsAppmeshGatewayRoute,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsAppmeshGatewayRoutes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsAppmeshGatewayRoute,
    idFilter,
    baseNode,
    optional,
  )
