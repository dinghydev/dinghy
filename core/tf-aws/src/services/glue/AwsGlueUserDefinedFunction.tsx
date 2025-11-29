import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/glue_user_defined_function

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  class_name: resolvableValue(z.string()),
  create_time: resolvableValue(z.string()),
  database_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  owner_name: resolvableValue(z.string()),
  owner_type: resolvableValue(z.string()),
  catalog_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  resource_uris: resolvableValue(
    z.object({
      resource_type: z.string(),
      uri: z.string(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGlueUserDefinedFunction(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_user_defined_function'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGlueUserDefinedFunction = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGlueUserDefinedFunction, node, id)

export const useAwsGlueUserDefinedFunctions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGlueUserDefinedFunction, node, id)
