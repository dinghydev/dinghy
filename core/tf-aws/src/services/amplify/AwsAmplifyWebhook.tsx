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

export const AwsAmplifyWebhookInputSchema = TfMetaSchema.extend({
  app_id: resolvableValue(z.string()),
  branch_name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsAmplifyWebhookOutputSchema = z.object({
  arn: z.string().optional(),
  url: z.string().optional(),
})

export type AwsAmplifyWebhookInputProps =
  & z.input<typeof AwsAmplifyWebhookInputSchema>
  & NodeProps

export type AwsAmplifyWebhookOutputProps =
  & z.output<typeof AwsAmplifyWebhookOutputSchema>
  & z.output<typeof AwsAmplifyWebhookInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/amplify_webhook

export function AwsAmplifyWebhook(props: Partial<AwsAmplifyWebhookInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_amplify_webhook'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAmplifyWebhookInputSchema}
      _outputSchema={AwsAmplifyWebhookOutputSchema}
      {...props}
    />
  )
}

export const useAwsAmplifyWebhook = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAmplifyWebhookOutputProps>(
    AwsAmplifyWebhook,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAmplifyWebhooks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAmplifyWebhookOutputProps>(
    AwsAmplifyWebhook,
    idFilter,
    baseNode,
    optional,
  )
