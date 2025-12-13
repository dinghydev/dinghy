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

export const InputSchema = z.object({
  account_id: resolvableValue(z.string()),
  experiment_template_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  role_arn: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/fis_target_account_configuration

export function AwsFisTargetAccountConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fis_target_account_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsFisTargetAccountConfiguration = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    AwsFisTargetAccountConfiguration,
    idFilter,
    baseNode,
  )

export const useAwsFisTargetAccountConfigurations = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    AwsFisTargetAccountConfiguration,
    idFilter,
    baseNode,
  )
