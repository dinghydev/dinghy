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

export const AwsAppmeshVirtualServiceInputSchema = TfMetaSchema.extend({
  mesh_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  spec: resolvableValue(z.object({
    provider: z.object({
      virtual_node: z.object({
        virtual_node_name: z.string(),
      }).optional(),
      virtual_router: z.object({
        virtual_router_name: z.string(),
      }).optional(),
    }).optional(),
  })),
  mesh_owner: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsAppmeshVirtualServiceOutputSchema = z.object({
  arn: z.string().optional(),
  created_date: z.string().optional(),
  id: z.string().optional(),
  last_updated_date: z.string().optional(),
  resource_owner: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsAppmeshVirtualServiceInputProps =
  & z.input<typeof AwsAppmeshVirtualServiceInputSchema>
  & NodeProps

export type AwsAppmeshVirtualServiceOutputProps =
  & z.output<typeof AwsAppmeshVirtualServiceOutputSchema>
  & z.output<typeof AwsAppmeshVirtualServiceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appmesh_virtual_service

export function AwsAppmeshVirtualService(
  props: Partial<AwsAppmeshVirtualServiceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appmesh_virtual_service'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppmeshVirtualServiceInputSchema}
      _outputSchema={AwsAppmeshVirtualServiceOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppmeshVirtualService = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppmeshVirtualServiceOutputProps>(
    AwsAppmeshVirtualService,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppmeshVirtualServices = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppmeshVirtualServiceOutputProps>(
    AwsAppmeshVirtualService,
    idFilter,
    baseNode,
    optional,
  )
