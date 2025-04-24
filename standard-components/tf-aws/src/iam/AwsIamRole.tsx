import {
  type IacNodeProps,
  ResolvableNumberSchema,
  ResolvableRecordSchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { aws } from '../index.ts'
import z from 'zod'
import { Bucket } from '@reactiac/standard-components-diagrams'
import { useTypedNode } from '@reactiac/base-components'

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
  & IacNodeProps

export type AwsIamRoleOutputProps =
  & z.output<typeof AwsIamRoleOutputSchema>
  & AwsIamRoleInputProps

export function AwsIamRole(props: AwsIamRoleInputProps) {
  const _importId = (node: any) => node._props.name
  return (
    <Bucket
      _importId={_importId}
      {...aws(
        props,
        AwsIamRoleInputSchema,
        AwsIamRoleOutputSchema,
      )}
    />
  )
}
export const useAwsIamRole = (id?: string) =>
  useTypedNode<AwsIamRoleOutputProps>(AwsIamRole, id)
