import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsDirectoryServiceRadiusSettingsInputSchema = TfMetaSchema.extend(
  {
    authentication_protocol: resolvableValue(z.string()),
    directory_id: resolvableValue(z.string()),
    display_label: resolvableValue(z.string()),
    radius_port: resolvableValue(z.number()),
    radius_retries: resolvableValue(z.number()),
    radius_servers: resolvableValue(z.string().array()),
    radius_timeout: resolvableValue(z.number()),
    shared_secret: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
    use_same_username: resolvableValue(z.boolean().optional()),
  },
)

export const AwsDirectoryServiceRadiusSettingsOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsDirectoryServiceRadiusSettingsInputProps =
  & z.input<typeof AwsDirectoryServiceRadiusSettingsInputSchema>
  & NodeProps

export type AwsDirectoryServiceRadiusSettingsOutputProps =
  & z.output<typeof AwsDirectoryServiceRadiusSettingsOutputSchema>
  & z.output<typeof AwsDirectoryServiceRadiusSettingsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/directory_service_radius_settings

export function AwsDirectoryServiceRadiusSettings(
  props: Partial<AwsDirectoryServiceRadiusSettingsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_directory_service_radius_settings'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDirectoryServiceRadiusSettingsInputSchema}
      _outputSchema={AwsDirectoryServiceRadiusSettingsOutputSchema}
      {...props}
    />
  )
}

export const useAwsDirectoryServiceRadiusSettingss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDirectoryServiceRadiusSettingsOutputProps>(
    AwsDirectoryServiceRadiusSettings,
    idFilter,
    baseNode,
    optional,
  )
