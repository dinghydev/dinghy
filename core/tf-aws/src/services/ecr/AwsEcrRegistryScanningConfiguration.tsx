import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ecr_registry_scanning_configuration

export const InputSchema = z.object({
  scan_type: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  rule: resolvableValue(
    z.object({
      scan_frequency: z.string(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({
  registry_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEcrRegistryScanningConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_registry_scanning_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEcrRegistryScanningConfiguration = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsEcrRegistryScanningConfiguration, node, id)

export const useAwsEcrRegistryScanningConfigurations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsEcrRegistryScanningConfiguration, node, id)
