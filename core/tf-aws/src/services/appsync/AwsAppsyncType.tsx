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

export const AwsAppsyncTypeInputSchema = TfMetaSchema.extend({
  api_id: resolvableValue(z.string()),
  definition: resolvableValue(z.string()),
  format: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsAppsyncTypeOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
})

export type AwsAppsyncTypeInputProps =
  & z.input<typeof AwsAppsyncTypeInputSchema>
  & NodeProps

export type AwsAppsyncTypeOutputProps =
  & z.output<typeof AwsAppsyncTypeOutputSchema>
  & z.output<typeof AwsAppsyncTypeInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_type

export function AwsAppsyncType(props: Partial<AwsAppsyncTypeInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appsync_type'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppsyncTypeInputSchema}
      _outputSchema={AwsAppsyncTypeOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppsyncType = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppsyncTypeOutputProps>(
    AwsAppsyncType,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppsyncTypes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppsyncTypeOutputProps>(
    AwsAppsyncType,
    idFilter,
    baseNode,
    optional,
  )
