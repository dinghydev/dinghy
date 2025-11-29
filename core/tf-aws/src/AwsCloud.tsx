import {
  IacNodeSchema,
  NodeProps,
  ResolvableStringSchema,
} from '@dinghy/base-components'

import { awsProps } from './utils/awsProps.ts'
import z from 'zod'
import { useTypedNode } from '@dinghy/base-components'
import { AwsCloud as AwsCloudDiagram } from '@dinghy/diagrams/containersAwsGroups'

export const AwsCloudInputSchema = IacNodeSchema.extend({
  accountId: ResolvableStringSchema.optional(),
  version: ResolvableStringSchema.optional(),
})

export type AwsCloudInputProps =
  & z.input<typeof AwsCloudInputSchema>
  & NodeProps

export default function AwsCloud(props: AwsCloudInputProps) {
  return (
    <AwsCloudDiagram
      {...awsProps(
        {
          _terraform: {
            required_providers: {
              aws: {
                source: 'aws',
                version: props.version || '6.22.0',
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
