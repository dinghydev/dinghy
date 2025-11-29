import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/directory_service_radius_settings

export const InputSchema = z.object({
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
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDirectoryServiceRadiusSettings(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_directory_service_radius_settings'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDirectoryServiceRadiusSettingss = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsDirectoryServiceRadiusSettings, node, id)
