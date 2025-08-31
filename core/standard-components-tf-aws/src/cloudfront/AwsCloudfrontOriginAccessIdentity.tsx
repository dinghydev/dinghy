import {
  type IacNodeProps,
  ResolvableStringSchema,
} from '@diac/base-components'

import { awsProps } from '../index.ts'
import z from 'zod'
import { Shape } from '@diac/base-components'
import { useTypedNode } from '@diac/base-components'

export const AwsCloudfrontOriginAccessIdentityInputSchema = z.object({})

export const AwsCloudfrontOriginAccessIdentityOutputSchema = z.object({
  arn: ResolvableStringSchema.optional(),
  cloudfront_access_identity_path: ResolvableStringSchema.optional(),
  iam_arn: ResolvableStringSchema.optional(),
})

export type AwsCloudfrontOriginAccessIdentityInputProps =
  & z.input<
    typeof AwsCloudfrontOriginAccessIdentityInputSchema
  >
  & IacNodeProps

export type AwsCloudfrontOriginAccessIdentityOutputProps =
  & z.input<
    typeof AwsCloudfrontOriginAccessIdentityOutputSchema
  >
  & AwsCloudfrontOriginAccessIdentityInputProps

export function AwsCloudfrontOriginAccessIdentity(
  props: AwsCloudfrontOriginAccessIdentityInputProps,
) {
  return (
    <Shape
      {...awsProps(
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
