import * as base from '@dinghy/base-components'
import { awsProps } from '../utils/awsProps.ts'
import z from 'zod'

const InputSchema = z.object({
  identity_store_id: base.ResolvableStringSchema.optional(),
  alternate_identifier: base.ResolvableRecordSchema,
})

const OutputSchema = z.object({
  id: base.ResolvableStringSchema.optional(),
  user_id: base.ResolvableStringSchema.optional(),
  arn: base.ResolvableStringSchema.optional(),
})

type InputProps = z.output<typeof InputSchema> & base.NodeProps

type OutputProps =
  & z.output<typeof OutputSchema>
  & InputProps

export function DataAwsIdentitystoreUser(props: any) {
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

export const useDataAwsIdentitystoreUser = (node?: any, id?: string) =>
  base.useTypedNode<OutputProps>(DataAwsIdentitystoreUser, node, id)
