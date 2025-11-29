import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ssm_resource_data_sync

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  s3_destination: resolvableValue(z.object({
    bucket_name: z.string(),
    kms_key_arn: z.string().optional(),
    prefix: z.string().optional(),
    region: z.string(),
    sync_format: z.string().optional(),
  })),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSsmResourceDataSync(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_resource_data_sync'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSsmResourceDataSync = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSsmResourceDataSync, node, id)

export const useAwsSsmResourceDataSyncs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSsmResourceDataSync, node, id)
