import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsImagebuilderComponent } from './AwsImagebuilderComponent.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/imagebuilder_component

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  change_description: z.string().optional(),
  data: z.string().optional(),
  date_created: z.string().optional(),
  description: z.string().optional(),
  encrypted: z.boolean().optional(),
  kms_key_id: z.string().optional(),
  name: z.string().optional(),
  owner: z.string().optional(),
  platform: z.string().optional(),
  supported_os_versions: z.string().array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsImagebuilderComponent(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsImagebuilderComponent
      _type='aws_imagebuilder_component'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsImagebuilderComponent = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsImagebuilderComponent, node, id)

export const useDataAwsImagebuilderComponents = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsImagebuilderComponent, node, id)
