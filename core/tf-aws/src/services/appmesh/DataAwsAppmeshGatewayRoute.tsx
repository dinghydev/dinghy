import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAppmeshGatewayRoute } from './AwsAppmeshGatewayRoute.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/appmesh_gateway_route

export const InputSchema = z.object({
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
        header: z.object({
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
        }).array(),
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
        query_parameter: z.object({
          match: z.object({
            exact: z.string(),
          }).array(),
          name: z.string(),
        }).array(),
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
        header: z.object({
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
        }).array(),
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
        query_parameter: z.object({
          match: z.object({
            exact: z.string(),
          }).array(),
          name: z.string(),
        }).array(),
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

export function DataAwsAppmeshGatewayRoute(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useDataAwsAppmeshGatewayRoute = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsAppmeshGatewayRoute, node, id)

export const useDataAwsAppmeshGatewayRoutes = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsAppmeshGatewayRoute, node, id)
