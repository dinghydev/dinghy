import * as base from '@reactiac/base-components'
import { awsProps } from '../index.ts'
import z from 'zod'

const InputSchema = z.object({
  instance_arn: base.ResolvableStringSchema,
  name: base.ResolvableStringSchema,
  session_duration: base.ResolvableStringSchema.optional(), //default to PT1H
})

const OutputSchema = z.object({
  id: base.ResolvableStringSchema.optional(),
  arn: base.ResolvableStringSchema.optional(),
  created_date: base.ResolvableStringSchema.optional(),
})

type InputProps = z.output<typeof InputSchema> & base.IacNodeProps

type OutputProps =
  & z.output<typeof OutputSchema>
  & InputProps

export function AwsSsoadminPermissionSet(props: any) {
  return (
    <base.Shape
      {...awsProps(
        props,
        InputSchema,
        OutputSchema,
      )}
    />
  )
}

export const useAwsSsoadminPermissionSet = (node?: any, id?: string) =>
  base.useTypedNode<OutputProps>(AwsSsoadminPermissionSet, node, id)
