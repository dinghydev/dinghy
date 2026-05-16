import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAppmeshVirtualRouter } from './AwsAppmeshVirtualRouter.tsx'

export const DataAwsAppmeshVirtualRouterInputSchema = TfMetaSchema.extend({
  mesh_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  mesh_owner: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsAppmeshVirtualRouterOutputSchema = z.object({
  arn: z.string().optional(),
  created_date: z.string().optional(),
  last_updated_date: z.string().optional(),
  resource_owner: z.string().optional(),
  spec: z.object({
    listener: z.object({
      port_mapping: z.object({
        port: z.number(),
        protocol: z.string(),
      }).array(),
    }).array(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsAppmeshVirtualRouterInputProps =
  & z.input<typeof DataAwsAppmeshVirtualRouterInputSchema>
  & NodeProps

export type DataAwsAppmeshVirtualRouterOutputProps =
  & z.output<typeof DataAwsAppmeshVirtualRouterOutputSchema>
  & z.output<typeof DataAwsAppmeshVirtualRouterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/appmesh_virtual_router

export function DataAwsAppmeshVirtualRouter(
  props: Partial<DataAwsAppmeshVirtualRouterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsAppmeshVirtualRouter
      _type='aws_appmesh_virtual_router'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsAppmeshVirtualRouterInputSchema}
      _outputSchema={DataAwsAppmeshVirtualRouterOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAppmeshVirtualRouter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsAppmeshVirtualRouterOutputProps>(
    DataAwsAppmeshVirtualRouter,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsAppmeshVirtualRouters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsAppmeshVirtualRouterOutputProps>(
    DataAwsAppmeshVirtualRouter,
    idFilter,
    baseNode,
    optional,
  )
