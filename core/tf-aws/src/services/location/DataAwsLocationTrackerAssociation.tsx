import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLocationTrackerAssociation } from './AwsLocationTrackerAssociation.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/location_tracker_association

export const InputSchema = z.object({
  consumer_arn: resolvableValue(z.string()),
  tracker_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsLocationTrackerAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsLocationTrackerAssociation
      _type='aws_location_tracker_association'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLocationTrackerAssociation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsLocationTrackerAssociation, node, id)

export const useDataAwsLocationTrackerAssociations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsLocationTrackerAssociation, node, id)
