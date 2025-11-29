import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/datazone_environment_blueprint

export const InputSchema = z.object({
  domain_id: resolvableValue(z.string()),
  managed: resolvableValue(z.boolean()),
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  blueprint_provider: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsDatazoneEnvironmentBlueprint(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datazone_environment_blueprint'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsDatazoneEnvironmentBlueprint = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsDatazoneEnvironmentBlueprint, node, id)

export const useDataAwsDatazoneEnvironmentBlueprints = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsDatazoneEnvironmentBlueprint, node, id)
