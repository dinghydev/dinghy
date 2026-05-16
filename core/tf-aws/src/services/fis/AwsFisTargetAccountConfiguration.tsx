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

export const AwsFisTargetAccountConfigurationInputSchema = TfMetaSchema.extend({
  account_id: resolvableValue(z.string()),
  experiment_template_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  role_arn: resolvableValue(z.string().optional()),
})

export const AwsFisTargetAccountConfigurationOutputSchema = z.object({})

export type AwsFisTargetAccountConfigurationInputProps =
  & z.input<typeof AwsFisTargetAccountConfigurationInputSchema>
  & NodeProps

export type AwsFisTargetAccountConfigurationOutputProps =
  & z.output<typeof AwsFisTargetAccountConfigurationOutputSchema>
  & z.output<typeof AwsFisTargetAccountConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/fis_target_account_configuration

export function AwsFisTargetAccountConfiguration(
  props: Partial<AwsFisTargetAccountConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fis_target_account_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsFisTargetAccountConfigurationInputSchema}
      _outputSchema={AwsFisTargetAccountConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsFisTargetAccountConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsFisTargetAccountConfigurationOutputProps>(
    AwsFisTargetAccountConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsFisTargetAccountConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsFisTargetAccountConfigurationOutputProps>(
    AwsFisTargetAccountConfiguration,
    idFilter,
    baseNode,
    optional,
  )
