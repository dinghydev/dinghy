import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/glue_user_defined_function

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

export const useAwsGlueUserDefinedFunction = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsGlueUserDefinedFunction,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGlueUserDefinedFunctions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsGlueUserDefinedFunction,
    idFilter,
    baseNode,
    optional,
  )
