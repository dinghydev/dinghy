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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appmesh_virtual_service

export function AwsAppmeshVirtualService(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appmesh_virtual_service'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppmeshVirtualService = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsAppmeshVirtualService,
    idFilter,
    baseNode,
    optional,
  )
