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
  action: resolvableValue(z.string()),
  layer_name: resolvableValue(z.string()),
  principal: resolvableValue(z.string()),
  statement_id: resolvableValue(z.string()),
  version_number: resolvableValue(z.number()),
  organization_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  skip_destroy: resolvableValue(z.boolean().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
  policy: z.string().optional(),
  revision_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lambda_layer_version_permission

export function AwsLambdaLayerVersionPermission(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lambda_layer_version_permission'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLambdaLayerVersionPermission = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsLambdaLayerVersionPermission,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLambdaLayerVersionPermissions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsLambdaLayerVersionPermission,
    idFilter,
    baseNode,
    optional,
  )
