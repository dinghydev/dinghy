import {
  IacNodeProps,
  IacNodeSchema,
  ResolvableStringSchema,
} from '@diac/base-components'

import { awsProps } from './index.ts'
import z from 'zod'
import { useTypedNode } from '@diac/base-components'
import { AwsCloud as AwsCloudDiagram } from '@diac/standard-components-diagrams/awsGroups'

export const AwsCloudInputSchema = IacNodeSchema.extend({
  accountId: ResolvableStringSchema.optional(),
  version: ResolvableStringSchema.optional(),
})

export type AwsCloudInputProps =
  & z.input<typeof AwsCloudInputSchema>
  & IacNodeProps

export default function AwsCloud(props: AwsCloudInputProps) {
  return (
    <AwsCloudDiagram
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
