import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAppmeshVirtualService } from './AwsAppmeshVirtualService.tsx'

export const InputSchema = z.object({
  mesh_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
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
    provider: z.object({
      virtual_node: z.object({
        virtual_node_name: z.string(),
      }).array(),
      virtual_router: z.object({
        virtual_router_name: z.string(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/appmesh_virtual_service

export function DataAwsAppmeshVirtualService(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsAppmeshVirtualService
      _type='aws_appmesh_virtual_service'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAppmeshVirtualService = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsAppmeshVirtualService,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsAppmeshVirtualServices = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsAppmeshVirtualService,
    idFilter,
    baseNode,
    optional,
  )
