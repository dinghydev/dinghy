import {
  IacNodeSchema,
  type NodeProps,
  ResolvableBooleanSchema,
  ResolvableStringSchema,
} from '@dinghy/base-components'

import { awsProps } from './utils/awsProps.ts'
import type z from 'zod'
import { Shape } from '@dinghy/base-components'

export const AwsBackendS3InputSchema = IacNodeSchema.extend({
  bucket: ResolvableStringSchema.optional(),
  useLockTable: ResolvableBooleanSchema.optional(),
  lockTable: ResolvableStringSchema.optional(),
  stateFile: ResolvableStringSchema.optional(),
  region: ResolvableStringSchema.optional(),
})

export type AwsBackendS3InputProps =
  & z.input<typeof AwsBackendS3InputSchema>
  & NodeProps

export function AwsBackendS3(props: AwsBackendS3InputProps) {
  return (
    <Shape
      {...awsProps(
        {
          _terraform: {
            backend: {
              s3: {
                bucket: props.bucket,
                key: props.stateFile,
                region: props.region,
                ...(props.useLockTable
                  ? { dynamodb_table: props.lockTable }
                  : { use_lockfile: true }),
              },
            },
          },
          ...props,
        },
        AwsBackendS3InputSchema,
      )}
    />
  )
}
