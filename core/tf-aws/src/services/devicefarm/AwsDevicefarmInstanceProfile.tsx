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

export const AwsDevicefarmInstanceProfileInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  exclude_app_packages_from_cleanup: resolvableValue(
    z.string().array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  package_cleanup: resolvableValue(z.boolean().optional()),
  reboot_after_use: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDevicefarmInstanceProfileOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsDevicefarmInstanceProfileImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsDevicefarmInstanceProfileInputProps =
  & z.input<typeof AwsDevicefarmInstanceProfileInputSchema>
  & z.input<typeof AwsDevicefarmInstanceProfileImportSchema>
  & NodeProps

export type AwsDevicefarmInstanceProfileOutputProps =
  & z.output<typeof AwsDevicefarmInstanceProfileOutputSchema>
  & z.output<typeof AwsDevicefarmInstanceProfileInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/devicefarm_instance_profile

export function AwsDevicefarmInstanceProfile(
  props: Partial<AwsDevicefarmInstanceProfileInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_devicefarm_instance_profile'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDevicefarmInstanceProfileInputSchema}
      _outputSchema={AwsDevicefarmInstanceProfileOutputSchema}
      _importSchema={AwsDevicefarmInstanceProfileImportSchema}
      {...props}
    />
  )
}

export const useAwsDevicefarmInstanceProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDevicefarmInstanceProfileOutputProps>(
    AwsDevicefarmInstanceProfile,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDevicefarmInstanceProfiles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDevicefarmInstanceProfileOutputProps>(
    AwsDevicefarmInstanceProfile,
    idFilter,
    baseNode,
    optional,
  )
