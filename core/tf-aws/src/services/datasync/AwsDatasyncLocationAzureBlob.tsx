import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/datasync_location_azure_blob

export const InputSchema = z.object({
  agent_arns: resolvableValue(z.string().array()),
  authentication_type: resolvableValue(z.string()),
  container_url: resolvableValue(z.string()),
  uri: resolvableValue(z.string()),
  access_tier: resolvableValue(z.string().optional()),
  blob_type: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  sas_configuration: resolvableValue(
    z.object({
      token: z.string(),
    }).optional(),
  ),
  subdirectory: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDatasyncLocationAzureBlob(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datasync_location_azure_blob'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsDatasyncLocationAzureBlob = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDatasyncLocationAzureBlob, node, id)

export const useAwsDatasyncLocationAzureBlobs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDatasyncLocationAzureBlob, node, id)
