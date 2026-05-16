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

export const AwsDxConnectionConfirmationInputSchema = TfMetaSchema.extend({
  connection_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsDxConnectionConfirmationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsDxConnectionConfirmationInputProps =
  & z.input<typeof AwsDxConnectionConfirmationInputSchema>
  & NodeProps

export type AwsDxConnectionConfirmationOutputProps =
  & z.output<typeof AwsDxConnectionConfirmationOutputSchema>
  & z.output<typeof AwsDxConnectionConfirmationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dx_connection_confirmation

export function AwsDxConnectionConfirmation(
  props: Partial<AwsDxConnectionConfirmationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_connection_confirmation'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDxConnectionConfirmationInputSchema}
      _outputSchema={AwsDxConnectionConfirmationOutputSchema}
      {...props}
    />
  )
}

export const useAwsDxConnectionConfirmation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDxConnectionConfirmationOutputProps>(
    AwsDxConnectionConfirmation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDxConnectionConfirmations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDxConnectionConfirmationOutputProps>(
    AwsDxConnectionConfirmation,
    idFilter,
    baseNode,
    optional,
  )
