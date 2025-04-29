import {
  type IacNodeProps,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { aws } from '../index.ts'
import z from 'zod'
import { Shape, useTypedNode } from '@reactiac/base-components'

export const AwsIamRolePolicyAttachmentInputSchema = z.object({
  role: ResolvableStringSchema.optional(),
  policy_arn: ResolvableStringSchema.optional(),
})

export const AwsIamRolePolicyAttachmentOutputSchema = z.object({
  arn: ResolvableStringSchema.optional(),
})

export type AwsIamRolePolicyAttachmentInputProps =
  & z.input<typeof AwsIamRolePolicyAttachmentInputSchema>
  & IacNodeProps

export type AwsIamRolePolicyAttachmentOutputProps =
  & z.output<typeof AwsIamRolePolicyAttachmentOutputSchema>
  & AwsIamRolePolicyAttachmentInputProps

export function importId(props: AwsIamRolePolicyAttachmentOutputProps) {
  return `${props.role}/${props.policy_arn}`
}
export function AwsIamRolePolicyAttachment(
  props: AwsIamRolePolicyAttachmentInputProps,
) {
  return (
    <Shape
      {...aws(
        props,
        AwsIamRolePolicyAttachmentInputSchema,
        AwsIamRolePolicyAttachmentOutputSchema,
      )}
    />
  )
}
export const useAwsIamRolePolicyAttachment = (id?: string) =>
  useTypedNode<AwsIamRolePolicyAttachmentOutputProps>(
    AwsIamRolePolicyAttachment,
    id,
  )
