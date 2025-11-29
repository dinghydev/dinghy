import * as base from '@dinghy/base-components'
import { awsProps } from '../utils/awsProps.ts'
import z from 'zod'

const InputSchema = z.object({})

const OutputSchema = z.object({
  id: base.ResolvableStringSchema.optional(),
  arns: base.ResolvableStringSchema.array().optional(),
  identity_store_ids: base.ResolvableStringSchema.array().optional(),
})

type InputProps = z.output<typeof InputSchema> & base.NodeProps

type OutputProps =
  & z.output<typeof OutputSchema>
  & InputProps

export function DataAwsSsoadminInstances(props: any) {
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

export const useDataAwsSsoadminInstances = () =>
  base.useTypedNode<OutputProps>(
    DataAwsSsoadminInstances,
  )
