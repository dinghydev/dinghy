import { type NodeProps, ResolvableStringSchema } from '@dinghy/base-components'

import { awsProps } from '../index.ts'
import z from 'zod'
import { Shape, useTypedNode } from '@dinghy/base-components'

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
  & NodeProps

export type AwsIamInstanceProfileOutputProps =
  & z.output<typeof AwsIamInstanceProfileOutputSchema>
  & AwsIamInstanceProfileInputProps

export function AwsIamInstanceProfile(props: AwsIamInstanceProfileInputProps) {
  const _importId = (node: any) => node._props.name
  return (
    <Shape
      _importId={_importId}
      {...awsProps(
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
