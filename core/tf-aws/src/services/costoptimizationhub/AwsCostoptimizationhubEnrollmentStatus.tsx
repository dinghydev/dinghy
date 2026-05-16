import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsCostoptimizationhubEnrollmentStatusInputSchema = TfMetaSchema
  .extend({
    include_member_accounts: resolvableValue(z.boolean().optional()),
  })

export const AwsCostoptimizationhubEnrollmentStatusOutputSchema = z.object({
  id: z.string().optional(),
  status: z.string().optional(),
})

export type AwsCostoptimizationhubEnrollmentStatusInputProps =
  & z.input<typeof AwsCostoptimizationhubEnrollmentStatusInputSchema>
  & NodeProps

export type AwsCostoptimizationhubEnrollmentStatusOutputProps =
  & z.output<typeof AwsCostoptimizationhubEnrollmentStatusOutputSchema>
  & z.output<typeof AwsCostoptimizationhubEnrollmentStatusInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/costoptimizationhub_enrollment_status

export function AwsCostoptimizationhubEnrollmentStatus(
  props: Partial<AwsCostoptimizationhubEnrollmentStatusInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_costoptimizationhub_enrollment_status'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCostoptimizationhubEnrollmentStatusInputSchema}
      _outputSchema={AwsCostoptimizationhubEnrollmentStatusOutputSchema}
      {...props}
    />
  )
}

export const useAwsCostoptimizationhubEnrollmentStatuss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCostoptimizationhubEnrollmentStatusOutputProps>(
    AwsCostoptimizationhubEnrollmentStatus,
    idFilter,
    baseNode,
    optional,
  )
