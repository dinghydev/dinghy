import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsShieldApplicationLayerAutomaticResponseInputSchema =
  TfMetaSchema.extend({
    action: resolvableValue(z.string()),
    resource_arn: resolvableValue(z.string()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsShieldApplicationLayerAutomaticResponseOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsShieldApplicationLayerAutomaticResponseImportSchema = z.object({
  resource_arn: resolvableValue(z.string()),
})

export type AwsShieldApplicationLayerAutomaticResponseInputProps =
  & z.input<typeof AwsShieldApplicationLayerAutomaticResponseInputSchema>
  & z.input<typeof AwsShieldApplicationLayerAutomaticResponseImportSchema>
  & NodeProps

export type AwsShieldApplicationLayerAutomaticResponseOutputProps =
  & z.output<typeof AwsShieldApplicationLayerAutomaticResponseOutputSchema>
  & z.output<typeof AwsShieldApplicationLayerAutomaticResponseInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/shield_application_layer_automatic_response

export function AwsShieldApplicationLayerAutomaticResponse(
  props: Partial<AwsShieldApplicationLayerAutomaticResponseInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_shield_application_layer_automatic_response'
      _category='resource'
      _title={_title}
      _inputSchema={AwsShieldApplicationLayerAutomaticResponseInputSchema}
      _outputSchema={AwsShieldApplicationLayerAutomaticResponseOutputSchema}
      _importSchema={AwsShieldApplicationLayerAutomaticResponseImportSchema}
      {...props}
    />
  )
}

export const useAwsShieldApplicationLayerAutomaticResponse = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsShieldApplicationLayerAutomaticResponseOutputProps>(
    AwsShieldApplicationLayerAutomaticResponse,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsShieldApplicationLayerAutomaticResponses = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsShieldApplicationLayerAutomaticResponseOutputProps>(
    AwsShieldApplicationLayerAutomaticResponse,
    idFilter,
    baseNode,
    optional,
  )
