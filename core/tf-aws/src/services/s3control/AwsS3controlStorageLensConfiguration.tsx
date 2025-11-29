import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3control_storage_lens_configuration

export const InputSchema = z.object({
  config_id: resolvableValue(z.string()),
  storage_lens_configuration: resolvableValue(z.object({
    enabled: z.boolean(),
  })),
  account_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsS3controlStorageLensConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3control_storage_lens_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3controlStorageLensConfiguration = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsS3controlStorageLensConfiguration, node, id)

export const useAwsS3controlStorageLensConfigurations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsS3controlStorageLensConfiguration, node, id)
