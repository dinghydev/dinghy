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

export const AwsEmrStudioSessionMappingInputSchema = TfMetaSchema.extend({
  identity_type: resolvableValue(z.string()),
  session_policy_arn: resolvableValue(z.string()),
  studio_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  identity_id: resolvableValue(z.string().optional()),
  identity_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEmrStudioSessionMappingOutputSchema = z.object({})

export type AwsEmrStudioSessionMappingInputProps =
  & z.input<typeof AwsEmrStudioSessionMappingInputSchema>
  & NodeProps

export type AwsEmrStudioSessionMappingOutputProps =
  & z.output<typeof AwsEmrStudioSessionMappingOutputSchema>
  & z.output<typeof AwsEmrStudioSessionMappingInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/emr_studio_session_mapping

export function AwsEmrStudioSessionMapping(
  props: Partial<AwsEmrStudioSessionMappingInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_emr_studio_session_mapping'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEmrStudioSessionMappingInputSchema}
      _outputSchema={AwsEmrStudioSessionMappingOutputSchema}
      {...props}
    />
  )
}

export const useAwsEmrStudioSessionMapping = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEmrStudioSessionMappingOutputProps>(
    AwsEmrStudioSessionMapping,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEmrStudioSessionMappings = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEmrStudioSessionMappingOutputProps>(
    AwsEmrStudioSessionMapping,
    idFilter,
    baseNode,
    optional,
  )
