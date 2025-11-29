import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/guardduty_publishing_destination

export const InputSchema = z.object({
  destination_arn: resolvableValue(z.string()),
  detector_id: resolvableValue(z.string()),
  kms_key_arn: resolvableValue(z.string()),
  destination_type: resolvableValue(z.string().optional()),
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

export function AwsGuarddutyPublishingDestination(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_guardduty_publishing_destination'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGuarddutyPublishingDestination = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGuarddutyPublishingDestination, node, id)

export const useAwsGuarddutyPublishingDestinations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsGuarddutyPublishingDestination, node, id)
