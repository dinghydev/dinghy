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

export const AwsAppsyncApiKeyInputSchema = TfMetaSchema.extend({
  api_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  expires: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsAppsyncApiKeyOutputSchema = z.object({
  __key: z.string().optional(),
  api_key_id: z.string().optional(),
  id: z.string().optional(),
})

export type AwsAppsyncApiKeyInputProps =
  & z.input<typeof AwsAppsyncApiKeyInputSchema>
  & NodeProps

export type AwsAppsyncApiKeyOutputProps =
  & z.output<typeof AwsAppsyncApiKeyOutputSchema>
  & z.output<typeof AwsAppsyncApiKeyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_api_key

export function AwsAppsyncApiKey(props: Partial<AwsAppsyncApiKeyInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appsync_api_key'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppsyncApiKeyInputSchema}
      _outputSchema={AwsAppsyncApiKeyOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppsyncApiKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppsyncApiKeyOutputProps>(
    AwsAppsyncApiKey,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppsyncApiKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppsyncApiKeyOutputProps>(
    AwsAppsyncApiKey,
    idFilter,
    baseNode,
    optional,
  )
