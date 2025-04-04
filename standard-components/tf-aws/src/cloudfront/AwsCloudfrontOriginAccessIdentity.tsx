import {
  type IacNodeProps,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { aws } from '../index.ts'
import z from 'zod'
import { Shape } from '@reactiac/base-components'
import { useTypedNode } from '@reactiac/base-components'

export const AwsCloudfrontOriginAccessIdentityInputSchema = z.object({})

export const AwsCloudfrontOriginAccessIdentityOutputSchema = z.object({
  arn: ResolvableStringSchema.optional(),
  cloudfront_access_identity_path: ResolvableStringSchema.optional(),
  iam_arn: ResolvableStringSchema.optional(),
})

export type AwsCloudfrontOriginAccessIdentityInputProps = z.input<
  typeof AwsCloudfrontOriginAccessIdentityInputSchema
> &
  IacNodeProps

export type AwsCloudfrontOriginAccessIdentityOutputProps = z.input<
  typeof AwsCloudfrontOriginAccessIdentityOutputSchema
> &
  AwsCloudfrontOriginAccessIdentityInputProps

export function AwsCloudfrontOriginAccessIdentity(
  props: AwsCloudfrontOriginAccessIdentityInputProps,
) {
  return (
    <Shape
      {...aws(
        props,
        AwsCloudfrontOriginAccessIdentityInputSchema,
        AwsCloudfrontOriginAccessIdentityOutputSchema,
      )}
    />
  )
}

export const useAwsCloudfrontOriginAccessIdentity = () =>
  useTypedNode<AwsCloudfrontOriginAccessIdentityOutputProps>(
    AwsCloudfrontOriginAccessIdentity,
  )
