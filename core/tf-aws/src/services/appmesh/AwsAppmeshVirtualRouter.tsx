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

export const AwsAppmeshVirtualRouterInputSchema = TfMetaSchema.extend({
  mesh_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  spec: resolvableValue(z.object({
    listener: z.object({
      port_mapping: z.object({
        port: z.number(),
        protocol: z.string(),
      }),
    }).array().optional(),
  })),
  mesh_owner: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsAppmeshVirtualRouterOutputSchema = z.object({
  arn: z.string().optional(),
  created_date: z.string().optional(),
  id: z.string().optional(),
  last_updated_date: z.string().optional(),
  resource_owner: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsAppmeshVirtualRouterInputProps =
  & z.input<typeof AwsAppmeshVirtualRouterInputSchema>
  & NodeProps

export type AwsAppmeshVirtualRouterOutputProps =
  & z.output<typeof AwsAppmeshVirtualRouterOutputSchema>
  & z.output<typeof AwsAppmeshVirtualRouterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appmesh_virtual_router

export function AwsAppmeshVirtualRouter(
  props: Partial<AwsAppmeshVirtualRouterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appmesh_virtual_router'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppmeshVirtualRouterInputSchema}
      _outputSchema={AwsAppmeshVirtualRouterOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppmeshVirtualRouter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppmeshVirtualRouterOutputProps>(
    AwsAppmeshVirtualRouter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppmeshVirtualRouters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppmeshVirtualRouterOutputProps>(
    AwsAppmeshVirtualRouter,
    idFilter,
    baseNode,
    optional,
  )
