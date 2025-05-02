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

export function AwsIamRolePolicyAttachment(
  props: AwsIamRolePolicyAttachmentInputProps,
) {
  const _importId = (node: any) =>
    `${node._props.role}/${node._props.policy_arn}`
  return (
    <Shape
      _importId={_importId}
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
