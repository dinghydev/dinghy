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

export const AwsSsmServiceSettingInputSchema = TfMetaSchema.extend({
  setting_id: resolvableValue(z.string()),
  setting_value: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSsmServiceSettingOutputSchema = z.object({
  arn: z.string().optional(),
  status: z.string().optional(),
})

export type AwsSsmServiceSettingInputProps =
  & z.input<typeof AwsSsmServiceSettingInputSchema>
  & NodeProps

export type AwsSsmServiceSettingOutputProps =
  & z.output<typeof AwsSsmServiceSettingOutputSchema>
  & z.output<typeof AwsSsmServiceSettingInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssm_service_setting

export function AwsSsmServiceSetting(
  props: Partial<AwsSsmServiceSettingInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_service_setting'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsmServiceSettingInputSchema}
      _outputSchema={AwsSsmServiceSettingOutputSchema}
      {...props}
    />
  )
}

export const useAwsSsmServiceSetting = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsmServiceSettingOutputProps>(
    AwsSsmServiceSetting,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsmServiceSettings = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsmServiceSettingOutputProps>(
    AwsSsmServiceSetting,
    idFilter,
    baseNode,
    optional,
  )
