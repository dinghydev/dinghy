import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAppmeshMesh } from './AwsAppmeshMesh.tsx'

export const DataAwsAppmeshMeshInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  mesh_owner: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsAppmeshMeshOutputSchema = z.object({
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

export type DataAwsAppmeshMeshInputProps =
  & z.input<typeof DataAwsAppmeshMeshInputSchema>
  & NodeProps

export type DataAwsAppmeshMeshOutputProps =
  & z.output<typeof DataAwsAppmeshMeshOutputSchema>
  & z.output<typeof DataAwsAppmeshMeshInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/appmesh_mesh

export function DataAwsAppmeshMesh(
  props: Partial<DataAwsAppmeshMeshInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsAppmeshMesh
      _type='aws_appmesh_mesh'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsAppmeshMeshInputSchema}
      _outputSchema={DataAwsAppmeshMeshOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAppmeshMesh = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsAppmeshMeshOutputProps>(
    DataAwsAppmeshMesh,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsAppmeshMeshs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsAppmeshMeshOutputProps>(
    DataAwsAppmeshMesh,
    idFilter,
    baseNode,
    optional,
  )
