import {
  IacNodeProps,
  IacNodeSchema,
  ResolvableBooleanSchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { aws } from './index.js'
import z from 'zod'
import { Shape } from '@reactiac/base-components'

export const AwsBackendS3InputSchema = IacNodeSchema.extend({
  bucket: ResolvableStringSchema.optional(),
  useLockTable: ResolvableBooleanSchema.optional(),
  lockTable: ResolvableStringSchema.optional(),
  stateFile: ResolvableStringSchema.optional(),
  region: ResolvableStringSchema.optional(),
})

export type AwsBackendS3InputProps =
  & z.infer<typeof AwsBackendS3InputSchema>
  & IacNodeProps

export function AwsBackendS3(
  props: AwsBackendS3InputProps,
) {
  return (
    <Shape
      {...aws({
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
      }, AwsBackendS3InputSchema)}
    />
  )
}
