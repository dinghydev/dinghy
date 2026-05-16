import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSsmParameter } from './AwsSsmParameter.tsx'

export const EphemeralAwsSsmParameterInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  with_decryption: resolvableValue(z.boolean().optional()),
})

export const EphemeralAwsSsmParameterOutputSchema = z.object({
  name: z.string().optional(),
  type: z.string().optional(),
  value: z.string().optional(),
  version: z.number().optional(),
  with_decryption: z.boolean().optional(),
})

export type EphemeralAwsSsmParameterInputProps =
  & z.input<typeof EphemeralAwsSsmParameterInputSchema>
  & NodeProps

export type EphemeralAwsSsmParameterOutputProps =
  & z.output<typeof EphemeralAwsSsmParameterOutputSchema>
  & z.output<typeof EphemeralAwsSsmParameterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/ephemeral-resources/ssm_parameter

export function EphemeralAwsSsmParameter(
  props: Partial<EphemeralAwsSsmParameterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSsmParameter
      _type='aws_ssm_parameter'
      _category='ephemeral'
      _title={_title}
      _inputSchema={EphemeralAwsSsmParameterInputSchema}
      _outputSchema={EphemeralAwsSsmParameterOutputSchema}
      {...props as any}
    />
  )
}

export const useEphemeralAwsSsmParameter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<EphemeralAwsSsmParameterOutputProps>(
    EphemeralAwsSsmParameter,
    idFilter,
    baseNode,
    optional,
  )

export const useEphemeralAwsSsmParameters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<EphemeralAwsSsmParameterOutputProps>(
    EphemeralAwsSsmParameter,
    idFilter,
    baseNode,
    optional,
  )
