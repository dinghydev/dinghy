import {
  type IacNodeProps,
  ResolvableBooleanSchema,
  ResolvableRecordSchema,
  ResolvableStringArraySchema,
  ResolvableStringSchema,
} from '@diac/base-components'

import { awsProps } from '../index.ts'
import z from 'zod'
import { useTypedNode } from '@diac/base-components'
import { Ec2InstanceContents } from '@diac/standard-components-diagrams/awsGroups'

export const AwsInstanceInputSchema = z.object({
  ami: ResolvableStringSchema.optional(),
  instance_type: ResolvableStringSchema.optional(),
  key_name: ResolvableStringSchema.optional(),
  vpc_security_group_ids: ResolvableStringArraySchema.optional(),
  root_block_device: ResolvableRecordSchema.optional(),
  metadata_options: ResolvableRecordSchema.optional(),
  lifecycle: ResolvableRecordSchema.optional(),
  subnet_id: ResolvableStringSchema.optional(),
  iam_instance_profile: ResolvableStringSchema.optional(),
  user_data: ResolvableStringSchema.optional(),
  user_data_base64: ResolvableStringSchema.optional(),
  associate_public_ip_address: ResolvableBooleanSchema.optional(),
  user_data_replace_on_change: ResolvableBooleanSchema.optional(),
  monitoring: ResolvableBooleanSchema.optional(),
  disable_api_stop: ResolvableBooleanSchema.optional(),
  tags: ResolvableRecordSchema.optional(),
})

export const AwsInstanceOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
  arn: ResolvableStringSchema.optional(),
})

export type AwsInstanceInputProps =
  & z.input<typeof AwsInstanceInputSchema>
  & IacNodeProps

export type AwsInstanceOutputProps =
  & z.output<typeof AwsInstanceOutputSchema>
  & AwsInstanceInputProps

export function importId(props: AwsInstanceOutputProps) {
  return props.id
}

export function AwsInstance(props: AwsInstanceInputProps) {
  return (
    <Ec2InstanceContents
      {...awsProps(
        props,
        AwsInstanceInputSchema,
        AwsInstanceOutputSchema,
      )}
    />
  )
}
export const useAwsInstance = (node?: any, id?: string) =>
  useTypedNode<AwsInstanceOutputProps>(AwsInstance, node, id)
