import { IacNodeProps, ResolvableStringSchema } from '@reactiac/base-components'

import { aws } from '../index.js'
import z from 'zod'
import { Shape } from '@reactiac/base-components'
import { useTypedNode } from '@reactiac/base-components'

export const AwsCloudfrontOriginAccessControlInputSchema = z.object({
  name: ResolvableStringSchema,
  origin_access_control_origin_type: ResolvableStringSchema.default('s3'),
  signing_behavior: ResolvableStringSchema.default('always'),
  signing_protocol: ResolvableStringSchema.default('sigv4'),
})

export const AwsCloudfrontOriginAccessControlOutputSchema = z.object({
  arn: ResolvableStringSchema.optional(),
  id: ResolvableStringSchema.optional(),
})

export type AwsCloudfrontOriginAccessControlInputProps =
  & z.infer<typeof AwsCloudfrontOriginAccessControlInputSchema>
  & IacNodeProps

export type AwsCloudfrontOriginAccessControlOutputProps =
  & z.infer<typeof AwsCloudfrontOriginAccessControlOutputSchema>
  & AwsCloudfrontOriginAccessControlInputProps

export function AwsCloudfrontOriginAccessControl(
  props: AwsCloudfrontOriginAccessControlInputProps,
) {
  return (
    <Shape
      {...aws(
        props,
        AwsCloudfrontOriginAccessControlInputSchema,
        AwsCloudfrontOriginAccessControlOutputSchema,
      )}
    />
  )
}

export const useAwsCloudfrontOriginAccessControl = (id?: string) =>
  useTypedNode<AwsCloudfrontOriginAccessControlOutputProps>(
    AwsCloudfrontOriginAccessControl, id
  )
