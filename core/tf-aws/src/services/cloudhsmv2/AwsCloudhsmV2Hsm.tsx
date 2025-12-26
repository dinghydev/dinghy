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
  cluster_id: resolvableValue(z.string()),
  availability_zone: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  ip_address: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  subnet_id: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  availability_zone: z.string().optional(),
  cluster_id: z.string().optional(),
  hsm_eni_id: z.string().optional(),
  hsm_id: z.string().optional(),
  hsm_state: z.string().optional(),
  ip_address: z.string().optional(),
  subnet_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudhsm_v2_hsm

export function AwsCloudhsmV2Hsm(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudhsm_v2_hsm'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudhsmV2Hsm = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsCloudhsmV2Hsm, idFilter, baseNode, optional)

export const useAwsCloudhsmV2Hsms = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsCloudhsmV2Hsm, idFilter, baseNode, optional)
