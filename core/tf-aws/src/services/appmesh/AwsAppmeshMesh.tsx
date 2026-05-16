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

export const AwsAppmeshMeshInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  spec: resolvableValue(
    z.object({
      egress_filter: z.object({
        type: z.string().optional(),
      }).optional(),
      service_discovery: z.object({
        ip_preference: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsAppmeshMeshOutputSchema = z.object({
  arn: z.string().optional(),
  created_date: z.string().optional(),
  id: z.string().optional(),
  last_updated_date: z.string().optional(),
  mesh_owner: z.string().optional(),
  resource_owner: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsAppmeshMeshInputProps =
  & z.input<typeof AwsAppmeshMeshInputSchema>
  & NodeProps

export type AwsAppmeshMeshOutputProps =
  & z.output<typeof AwsAppmeshMeshOutputSchema>
  & z.output<typeof AwsAppmeshMeshInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appmesh_mesh

export function AwsAppmeshMesh(props: Partial<AwsAppmeshMeshInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appmesh_mesh'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppmeshMeshInputSchema}
      _outputSchema={AwsAppmeshMeshOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppmeshMesh = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppmeshMeshOutputProps>(
    AwsAppmeshMesh,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppmeshMeshs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppmeshMeshOutputProps>(
    AwsAppmeshMesh,
    idFilter,
    baseNode,
    optional,
  )
