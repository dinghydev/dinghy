import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lakeformation_resource

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  hybrid_access_enabled: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  role_arn: resolvableValue(z.string().optional()),
  use_service_linked_role: resolvableValue(z.boolean().optional()),
  with_federation: resolvableValue(z.boolean().optional()),
  with_privileged_access: resolvableValue(z.boolean().optional()),
})

export const OutputSchema = z.object({
  last_modified: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLakeformationResource(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lakeformation_resource'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLakeformationResource = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLakeformationResource, node, id)

export const useAwsLakeformationResources = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLakeformationResource, node, id)
