import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLocationTracker } from './AwsLocationTracker.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/location_tracker

export const InputSchema = z.object({
  tracker_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  create_time: z.string().optional(),
  description: z.string().optional(),
  kms_key_id: z.string().optional(),
  position_filtering: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  tracker_arn: z.string().optional(),
  update_time: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsLocationTracker(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsLocationTracker
      _type='aws_location_tracker'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLocationTracker = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsLocationTracker, node, id)

export const useDataAwsLocationTrackers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsLocationTracker, node, id)
