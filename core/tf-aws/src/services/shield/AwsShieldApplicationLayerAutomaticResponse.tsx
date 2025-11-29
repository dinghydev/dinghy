import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/shield_application_layer_automatic_response

export const InputSchema = z.object({
  action: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  resource_arn: resolvableValue(z.string()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({})

export const ImportSchema = z.object({
  resource_arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsShieldApplicationLayerAutomaticResponse(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_shield_application_layer_automatic_response'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsShieldApplicationLayerAutomaticResponse = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsShieldApplicationLayerAutomaticResponse,
    node,
    id,
  )

export const useAwsShieldApplicationLayerAutomaticResponses = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsShieldApplicationLayerAutomaticResponse,
    node,
    id,
  )
