import {
  type IacNodeProps,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { aws } from '../index.ts'
import z from 'zod'
import { Shape, useTypedNode } from '@reactiac/base-components'

export const AwsIamInstanceProfileInputSchema = z.object({
  name: ResolvableStringSchema.optional(),
  role: ResolvableStringSchema.optional(),
  path: ResolvableStringSchema.optional(),
})

export const AwsIamInstanceProfileOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
  arn: ResolvableStringSchema.optional(),
})

export type AwsIamInstanceProfileInputProps =
  & z.input<typeof AwsIamInstanceProfileInputSchema>
  & IacNodeProps

export type AwsIamInstanceProfileOutputProps =
  & z.output<typeof AwsIamInstanceProfileOutputSchema>
  & AwsIamInstanceProfileInputProps

export function AwsIamInstanceProfile(props: AwsIamInstanceProfileInputProps) {
  const _importId = (node: any) => node._props.name
  return (
    <Shape
      _importId={_importId}
      {...aws(
        props,
        AwsIamInstanceProfileInputSchema,
        AwsIamInstanceProfileOutputSchema,
      )}
    />
  )
}
export const useAwsIamInstanceProfile = (node?: any, id?: string) =>
  useTypedNode<AwsIamInstanceProfileOutputProps>(
    AwsIamInstanceProfile,
    node,
    id,
  )
