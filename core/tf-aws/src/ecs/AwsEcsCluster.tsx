import {
  type NodeProps,
  ResolvableRecordSchema,
  ResolvableStringSchema,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

import { awsProps } from '../utils/awsProps.ts'
// import { awsProps } from "@dinghy/tf-aws";

// Schema based on documentation:
// https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_cluster

const InputSchema = z.object({
  name: ResolvableStringSchema,
  configuration: ResolvableRecordSchema.optional(),
  setting: ResolvableRecordSchema.optional(),
})

const OutputSchema = z.object({
  arn: ResolvableStringSchema.optional(),
  ecsClusterId: ResolvableStringSchema.optional(),
})

export type Props =
  & z.output<typeof InputSchema>
  & z.output<typeof OutputSchema>
  & NodeProps

export function AwsEcsCluster(props: Props) {
  const _importId = (node: any) => node._props.name
  return (
    <Shape
      _importId={_importId}
      {...awsProps(
        props,
        InputSchema,
        OutputSchema,
      )}
    />
  )
}

export const useAwsEcsCluster = (node?: any, id?: string) =>
  useTypedNode<Props>(AwsEcsCluster, node, id)

export const useAwsEcsClusters = (node?: any, id?: string) =>
  useTypedNodes<Props>(AwsEcsCluster, node, id)
