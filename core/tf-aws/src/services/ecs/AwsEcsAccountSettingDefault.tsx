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

export const AwsEcsAccountSettingDefaultInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  value: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEcsAccountSettingDefaultOutputSchema = z.object({
  principal_arn: z.string().optional(),
})

export type AwsEcsAccountSettingDefaultInputProps =
  & z.input<typeof AwsEcsAccountSettingDefaultInputSchema>
  & NodeProps

export type AwsEcsAccountSettingDefaultOutputProps =
  & z.output<typeof AwsEcsAccountSettingDefaultOutputSchema>
  & z.output<typeof AwsEcsAccountSettingDefaultInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ecs_account_setting_default

export function AwsEcsAccountSettingDefault(
  props: Partial<AwsEcsAccountSettingDefaultInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecs_account_setting_default'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEcsAccountSettingDefaultInputSchema}
      _outputSchema={AwsEcsAccountSettingDefaultOutputSchema}
      {...props}
    />
  )
}

export const useAwsEcsAccountSettingDefault = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEcsAccountSettingDefaultOutputProps>(
    AwsEcsAccountSettingDefault,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEcsAccountSettingDefaults = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEcsAccountSettingDefaultOutputProps>(
    AwsEcsAccountSettingDefault,
    idFilter,
    baseNode,
    optional,
  )
