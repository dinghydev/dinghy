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

export const AwsCloudhsmV2HsmInputSchema = TfMetaSchema.extend({
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
})

export const AwsCloudhsmV2HsmOutputSchema = z.object({
  availability_zone: z.string().optional(),
  cluster_id: z.string().optional(),
  hsm_eni_id: z.string().optional(),
  hsm_id: z.string().optional(),
  hsm_state: z.string().optional(),
  ip_address: z.string().optional(),
  subnet_id: z.string().optional(),
})

export type AwsCloudhsmV2HsmInputProps =
  & z.input<typeof AwsCloudhsmV2HsmInputSchema>
  & NodeProps

export type AwsCloudhsmV2HsmOutputProps =
  & z.output<typeof AwsCloudhsmV2HsmOutputSchema>
  & z.output<typeof AwsCloudhsmV2HsmInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudhsm_v2_hsm

export function AwsCloudhsmV2Hsm(props: Partial<AwsCloudhsmV2HsmInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudhsm_v2_hsm'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudhsmV2HsmInputSchema}
      _outputSchema={AwsCloudhsmV2HsmOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudhsmV2Hsm = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudhsmV2HsmOutputProps>(
    AwsCloudhsmV2Hsm,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudhsmV2Hsms = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudhsmV2HsmOutputProps>(
    AwsCloudhsmV2Hsm,
    idFilter,
    baseNode,
    optional,
  )
