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

export const AwsEcrAccountSettingInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  value: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEcrAccountSettingOutputSchema = z.object({})

export type AwsEcrAccountSettingInputProps =
  & z.input<typeof AwsEcrAccountSettingInputSchema>
  & NodeProps

export type AwsEcrAccountSettingOutputProps =
  & z.output<typeof AwsEcrAccountSettingOutputSchema>
  & z.output<typeof AwsEcrAccountSettingInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ecr_account_setting

export function AwsEcrAccountSetting(
  props: Partial<AwsEcrAccountSettingInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_account_setting'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEcrAccountSettingInputSchema}
      _outputSchema={AwsEcrAccountSettingOutputSchema}
      {...props}
    />
  )
}

export const useAwsEcrAccountSetting = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEcrAccountSettingOutputProps>(
    AwsEcrAccountSetting,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEcrAccountSettings = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEcrAccountSettingOutputProps>(
    AwsEcrAccountSetting,
    idFilter,
    baseNode,
    optional,
  )
