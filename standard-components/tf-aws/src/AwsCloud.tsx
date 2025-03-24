import {
  IacNodeProps,
  IacNodeSchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { aws } from './index.js'
import z from 'zod'
import { GroupAwsCloudAlt } from '@reactiac/standard-components-diagrams'
import { useTypedNode } from '@reactiac/base-components'

export const AwsCloudInputSchema = IacNodeSchema.extend({
  accountId: ResolvableStringSchema.optional(),
  version: ResolvableStringSchema.optional(),
})

export type AwsCloudInputProps = z.infer<typeof AwsCloudInputSchema> &
  IacNodeProps

export default function AwsCloud(props: AwsCloudInputProps) {
  return (
    <GroupAwsCloudAlt
      {...aws(
        {
          _terraform: {
            required_providers: {
              aws: {
                source: 'aws',
                version: props.version || '5.63.1',
              },
            },
          },
          _stage: '*',
          ...props,
        },
        AwsCloudInputSchema,
      )}
    />
  )
}

export const useAwsCloud = () => useTypedNode<AwsCloudInputProps>(AwsCloud)
