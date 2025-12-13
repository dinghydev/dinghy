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
  image_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  group: resolvableValue(z.string().optional()),
  organization_arn: resolvableValue(z.string().optional()),
  organizational_unit_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ami_launch_permission

export function AwsAmiLaunchPermission(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ami_launch_permission'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAmiLaunchPermission = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsAmiLaunchPermission, idFilter, baseNode)

export const useAwsAmiLaunchPermissions = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsAmiLaunchPermission, idFilter, baseNode)
