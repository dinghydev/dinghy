import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAppmeshMesh } from './AwsAppmeshMesh.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/appmesh_mesh

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
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
    egress_filter: z.object({
      type: z.string(),
    }).array(),
    service_discovery: z.object({
      ip_preference: z.string(),
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

export function DataAwsAppmeshMesh(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsAppmeshMesh
      _type='aws_appmesh_mesh'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAppmeshMesh = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsAppmeshMesh, node, id)

export const useDataAwsAppmeshMeshs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsAppmeshMesh, node, id)
