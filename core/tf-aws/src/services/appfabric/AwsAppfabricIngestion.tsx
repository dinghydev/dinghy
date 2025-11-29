import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appfabric_ingestion

export const InputSchema = z.object({
  app: resolvableValue(z.string()),
  app_bundle_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  ingestion_type: resolvableValue(z.string()),
  tenant_id: resolvableValue(z.string()),
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

export function AwsAppfabricIngestion(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appfabric_ingestion'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppfabricIngestion = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppfabricIngestion, node, id)

export const useAwsAppfabricIngestions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAppfabricIngestion, node, id)
