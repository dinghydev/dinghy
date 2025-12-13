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
    backend_defaults: z.object({
      client_policy: z.object({
        tls: z.object({
          enforce: z.boolean().optional(),
          ports: z.number().array().optional(),
          certificate: z.object({
            file: z.object({
              certificate_chain: z.string(),
              private_key: z.string(),
            }).optional(),
            sds: z.object({
              secret_name: z.string(),
            }).optional(),
          }).optional(),
          validation: z.object({
            subject_alternative_names: z.object({
              match: z.object({
                exact: z.string().array(),
              }),
            }).optional(),
            trust: z.object({
              acm: z.object({
                certificate_authority_arns: z.string().array(),
              }).optional(),
              file: z.object({
                certificate_chain: z.string(),
              }).optional(),
              sds: z.object({
                secret_name: z.string(),
              }).optional(),
            }),
          }),
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
      port_mapping: z.object({
        port: z.number(),
        protocol: z.string(),
      }),
      tls: z.object({
        mode: z.string(),
        certificate: z.object({
          acm: z.object({
            certificate_arn: z.string(),
          }).optional(),
          file: z.object({
            certificate_chain: z.string(),
            private_key: z.string(),
          }).optional(),
          sds: z.object({
            secret_name: z.string(),
          }).optional(),
        }),
        validation: z.object({
          subject_alternative_names: z.object({
            match: z.object({
              exact: z.string().array(),
            }),
          }).optional(),
          trust: z.object({
            file: z.object({
              certificate_chain: z.string(),
            }).optional(),
            sds: z.object({
              secret_name: z.string(),
            }).optional(),
          }),
        }).optional(),
      }).optional(),
    }).array(),
    logging: z.object({
      access_log: z.object({
        file: z.object({
          path: z.string(),
          format: z.object({
            text: z.string().optional(),
            json: z.object({
              key: z.string(),
              value: z.string(),
            }).array().optional(),
          }).optional(),
        }).optional(),
      }).optional(),
    }).optional(),
  })),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appmesh_virtual_gateway

export function AwsAppmeshVirtualGateway(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appmesh_virtual_gateway'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppmeshVirtualGateway = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsAppmeshVirtualGateway, idFilter, baseNode)

export const useAwsAppmeshVirtualGateways = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsAppmeshVirtualGateway, idFilter, baseNode)
