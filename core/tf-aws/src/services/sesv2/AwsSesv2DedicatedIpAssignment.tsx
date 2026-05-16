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

export const AwsSesv2DedicatedIpAssignmentInputSchema = TfMetaSchema.extend({
  destination_pool_name: resolvableValue(z.string()),
  ip: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsSesv2DedicatedIpAssignmentOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsSesv2DedicatedIpAssignmentInputProps =
  & z.input<typeof AwsSesv2DedicatedIpAssignmentInputSchema>
  & NodeProps

export type AwsSesv2DedicatedIpAssignmentOutputProps =
  & z.output<typeof AwsSesv2DedicatedIpAssignmentOutputSchema>
  & z.output<typeof AwsSesv2DedicatedIpAssignmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_dedicated_ip_assignment

export function AwsSesv2DedicatedIpAssignment(
  props: Partial<AwsSesv2DedicatedIpAssignmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sesv2_dedicated_ip_assignment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesv2DedicatedIpAssignmentInputSchema}
      _outputSchema={AwsSesv2DedicatedIpAssignmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesv2DedicatedIpAssignment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSesv2DedicatedIpAssignmentOutputProps>(
    AwsSesv2DedicatedIpAssignment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesv2DedicatedIpAssignments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesv2DedicatedIpAssignmentOutputProps>(
    AwsSesv2DedicatedIpAssignment,
    idFilter,
    baseNode,
    optional,
  )
