import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3control_multi_region_access_point

export const InputSchema = z.object({
  details: resolvableValue(z.object({
    name: z.string(),
  })),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  alias: z.string().optional(),
  arn: z.string().optional(),
  domain_name: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsS3controlMultiRegionAccessPoint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3control_multi_region_access_point'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3controlMultiRegionAccessPoint = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsS3controlMultiRegionAccessPoint, node, id)

export const useAwsS3controlMultiRegionAccessPoints = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsS3controlMultiRegionAccessPoint, node, id)
