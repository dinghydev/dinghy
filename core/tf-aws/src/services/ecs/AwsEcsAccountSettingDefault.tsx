import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ecs_account_setting_default

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  principal_arn: resolvableValue(z.string()),
  value: resolvableValue(z.string()),
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

export function AwsEcsAccountSettingDefault(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecs_account_setting_default'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEcsAccountSettingDefault = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEcsAccountSettingDefault, node, id)

export const useAwsEcsAccountSettingDefaults = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEcsAccountSettingDefault, node, id)
