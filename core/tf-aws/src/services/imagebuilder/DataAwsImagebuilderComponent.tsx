import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsImagebuilderComponent } from './AwsImagebuilderComponent.tsx'

export const InputSchema = TfMetaSchema.extend({
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
  supported_os_versions: z.set(z.string()).optional(),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/imagebuilder_component

export function DataAwsImagebuilderComponent(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useDataAwsImagebuilderComponent = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsImagebuilderComponent,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsImagebuilderComponents = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsImagebuilderComponent,
    idFilter,
    baseNode,
    optional,
  )
