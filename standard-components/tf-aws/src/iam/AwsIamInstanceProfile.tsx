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

export const AwsIamInstanceProfileInputSchema = z.object({
  name: ResolvableStringSchema.optional(),
  role: ResolvableStringSchema.optional(),
  path: ResolvableStringSchema.optional().default('/'),
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
    <Bucket
      _importId={_importId}
      {...aws(
        props,
        AwsIamInstanceProfileInputSchema,
        AwsIamInstanceProfileOutputSchema,
      )}
    />
  )
}
export const useAwsIamInstanceProfile = (id?: string) =>
  useTypedNode<AwsIamInstanceProfileOutputProps>(AwsIamInstanceProfile, id)
