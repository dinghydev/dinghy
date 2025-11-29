import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lakeformation_identity_center_configuration

export const InputSchema = z.object({
  instance_arn: resolvableValue(z.string()),
  catalog_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  application_arn: z.string().optional(),
  resource_share: z.string().optional(),
})

export const ImportSchema = z.object({
  catalog_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLakeformationIdentityCenterConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lakeformation_identity_center_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsLakeformationIdentityCenterConfiguration = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsLakeformationIdentityCenterConfiguration,
    node,
    id,
  )

export const useAwsLakeformationIdentityCenterConfigurations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsLakeformationIdentityCenterConfiguration,
    node,
    id,
  )
