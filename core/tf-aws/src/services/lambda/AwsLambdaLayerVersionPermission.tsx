import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lambda_layer_version_permission

export const InputSchema = z.object({
  action: resolvableValue(z.string()),
  layer_name: resolvableValue(z.string()),
  principal: resolvableValue(z.string()),
  statement_id: resolvableValue(z.string()),
  version_number: resolvableValue(z.number()),
  organization_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  skip_destroy: resolvableValue(z.boolean().optional()),
})

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

export function AwsLambdaLayerVersionPermission(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsLambdaLayerVersionPermission = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLambdaLayerVersionPermission, node, id)

export const useAwsLambdaLayerVersionPermissions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLambdaLayerVersionPermission, node, id)
