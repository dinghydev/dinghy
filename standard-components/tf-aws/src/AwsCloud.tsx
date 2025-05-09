import {
  IacNodeProps,
  IacNodeSchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { awsProps } from './index.ts'
import z from 'zod'
import { GroupAwsCloudAlt } from '@reactiac/standard-components-diagrams'
import { useTypedNode } from '@reactiac/base-components'

export const AwsCloudInputSchema = IacNodeSchema.extend({
  accountId: ResolvableStringSchema.optional(),
  version: ResolvableStringSchema.optional(),
})

export type AwsCloudInputProps =
  & z.input<typeof AwsCloudInputSchema>
  & IacNodeProps

export default function AwsCloud(props: AwsCloudInputProps) {
  return (
    <GroupAwsCloudAlt
      {...awsProps(
        {
          _terraform: {
            required_providers: {
              aws: {
                source: 'aws',
                version: props.version || '5.94.1',
              },
            },
          },
          _stackResource: true,
          ...props,
        },
        AwsCloudInputSchema,
      )}
    />
  )
}

export const useAwsCloud = () => useTypedNode<AwsCloudInputProps>(AwsCloud)
