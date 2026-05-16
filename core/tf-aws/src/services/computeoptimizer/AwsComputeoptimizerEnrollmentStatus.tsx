import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsComputeoptimizerEnrollmentStatusInputSchema = TfMetaSchema
  .extend({
    status: resolvableValue(z.string()),
    include_member_accounts: resolvableValue(z.boolean().optional()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsComputeoptimizerEnrollmentStatusOutputSchema = z.object({
  id: z.string().optional(),
  number_of_member_accounts_opted_in: z.number().optional(),
})

export type AwsComputeoptimizerEnrollmentStatusInputProps =
  & z.input<typeof AwsComputeoptimizerEnrollmentStatusInputSchema>
  & NodeProps

export type AwsComputeoptimizerEnrollmentStatusOutputProps =
  & z.output<typeof AwsComputeoptimizerEnrollmentStatusOutputSchema>
  & z.output<typeof AwsComputeoptimizerEnrollmentStatusInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/computeoptimizer_enrollment_status

export function AwsComputeoptimizerEnrollmentStatus(
  props: Partial<AwsComputeoptimizerEnrollmentStatusInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_computeoptimizer_enrollment_status'
      _category='resource'
      _title={_title}
      _inputSchema={AwsComputeoptimizerEnrollmentStatusInputSchema}
      _outputSchema={AwsComputeoptimizerEnrollmentStatusOutputSchema}
      {...props}
    />
  )
}

export const useAwsComputeoptimizerEnrollmentStatuss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsComputeoptimizerEnrollmentStatusOutputProps>(
    AwsComputeoptimizerEnrollmentStatus,
    idFilter,
    baseNode,
    optional,
  )
