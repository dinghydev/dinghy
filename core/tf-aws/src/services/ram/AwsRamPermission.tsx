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

export const AwsRamPermissionInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  policy_template: resolvableValue(z.string()),
  resource_type: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsRamPermissionOutputSchema = z.object({
  arn: z.string().optional(),
  default_version: z.boolean().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version: z.string().optional(),
})

export const AwsRamPermissionImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsRamPermissionInputProps =
  & z.input<typeof AwsRamPermissionInputSchema>
  & z.input<typeof AwsRamPermissionImportSchema>
  & NodeProps

export type AwsRamPermissionOutputProps =
  & z.output<typeof AwsRamPermissionOutputSchema>
  & z.output<typeof AwsRamPermissionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ram_permission

export function AwsRamPermission(props: Partial<AwsRamPermissionInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ram_permission'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRamPermissionInputSchema}
      _outputSchema={AwsRamPermissionOutputSchema}
      _importSchema={AwsRamPermissionImportSchema}
      {...props}
    />
  )
}

export const useAwsRamPermission = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRamPermissionOutputProps>(
    AwsRamPermission,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRamPermissions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRamPermissionOutputProps>(
    AwsRamPermission,
    idFilter,
    baseNode,
    optional,
  )
