import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3control_multi_region_access_point_policy

export const InputSchema = z.object({
  details: resolvableValue(z.object({
    name: z.string(),
    policy: z.string(),
  })),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  established: z.string().optional(),
  id: z.string().optional(),
  proposed: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsS3controlMultiRegionAccessPointPolicy(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3control_multi_region_access_point_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3controlMultiRegionAccessPointPolicy = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsS3controlMultiRegionAccessPointPolicy, node, id)

export const useAwsS3controlMultiRegionAccessPointPolicys = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsS3controlMultiRegionAccessPointPolicy, node, id)
