import { type NodeProps, ResolvableStringSchema } from '@dinghy/base-components'

import { awsProps } from '../utils/awsProps.ts'
import z from 'zod'
import { Shape, useTypedNode } from '@dinghy/base-components'

export const AwsIamRoleInputSchema = z.object({
  name: ResolvableStringSchema.optional(),
  policy: ResolvableStringSchema.optional(),
  assume_role_policy: ResolvableStringSchema.optional(),
})

export const AwsIamRoleOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
  arn: ResolvableStringSchema.optional(),
})

export type AwsIamRoleInputProps =
  & z.input<typeof AwsIamRoleInputSchema>
  & NodeProps

export type AwsIamRoleOutputProps =
  & z.output<typeof AwsIamRoleOutputSchema>
  & AwsIamRoleInputProps

export function AwsIamRole(props: AwsIamRoleInputProps) {
  const _importId = (node: any) => node._props.name
  return (
    <Shape
      _importId={_importId}
      {...awsProps(
        props,
        AwsIamRoleInputSchema,
        AwsIamRoleOutputSchema,
      )}
    />
  )
}
export const useAwsIamRole = (node?: any, id?: string) =>
  useTypedNode<AwsIamRoleOutputProps>(AwsIamRole, node, id)
