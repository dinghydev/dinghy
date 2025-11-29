import { type NodeProps, ResolvableStringSchema } from '@dinghy/base-components'

import { awsProps } from '../utils/awsProps.ts'
import z from 'zod'
import { Shape } from '@dinghy/base-components'
import { useTypedNode } from '@dinghy/base-components'

export const AwsCloudfrontOriginAccessControlInputSchema = z.object({
  name: ResolvableStringSchema,
  origin_access_control_origin_type: ResolvableStringSchema.optional().default(
    's3',
  ),
  signing_behavior: ResolvableStringSchema.optional().default('always'),
  signing_protocol: ResolvableStringSchema.optional().default('sigv4'),
})

export const AwsCloudfrontOriginAccessControlOutputSchema = z.object({
  arn: ResolvableStringSchema.optional(),
  id: ResolvableStringSchema.optional(),
})

export type AwsCloudfrontOriginAccessControlInputProps =
  & z.input<
    typeof AwsCloudfrontOriginAccessControlInputSchema
  >
  & NodeProps

export type AwsCloudfrontOriginAccessControlOutputProps =
  & z.input<
    typeof AwsCloudfrontOriginAccessControlOutputSchema
  >
  & AwsCloudfrontOriginAccessControlInputProps

export function AwsCloudfrontOriginAccessControl(
  props: AwsCloudfrontOriginAccessControlInputProps,
) {
  return (
    <Shape
      {...awsProps(
        props,
        AwsCloudfrontOriginAccessControlInputSchema,
        AwsCloudfrontOriginAccessControlOutputSchema,
      )}
    />
  )
}

export const useAwsCloudfrontOriginAccessControl = (node?: any, id?: string) =>
  useTypedNode<AwsCloudfrontOriginAccessControlOutputProps>(
    AwsCloudfrontOriginAccessControl,
    node,
    id,
  )
