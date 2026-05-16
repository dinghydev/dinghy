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

export const AwsAmiLaunchPermissionInputSchema = TfMetaSchema.extend({
  image_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  group: resolvableValue(z.string().optional()),
  organization_arn: resolvableValue(z.string().optional()),
  organizational_unit_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsAmiLaunchPermissionOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsAmiLaunchPermissionInputProps =
  & z.input<typeof AwsAmiLaunchPermissionInputSchema>
  & NodeProps

export type AwsAmiLaunchPermissionOutputProps =
  & z.output<typeof AwsAmiLaunchPermissionOutputSchema>
  & z.output<typeof AwsAmiLaunchPermissionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ami_launch_permission

export function AwsAmiLaunchPermission(
  props: Partial<AwsAmiLaunchPermissionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ami_launch_permission'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAmiLaunchPermissionInputSchema}
      _outputSchema={AwsAmiLaunchPermissionOutputSchema}
      {...props}
    />
  )
}

export const useAwsAmiLaunchPermission = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAmiLaunchPermissionOutputProps>(
    AwsAmiLaunchPermission,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAmiLaunchPermissions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAmiLaunchPermissionOutputProps>(
    AwsAmiLaunchPermission,
    idFilter,
    baseNode,
    optional,
  )
