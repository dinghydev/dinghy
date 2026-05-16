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

export const AwsAppstreamUserInputSchema = TfMetaSchema.extend({
  authentication_type: resolvableValue(z.string()),
  user_name: resolvableValue(z.string()),
  enabled: resolvableValue(z.boolean().optional()),
  first_name: resolvableValue(z.string().optional()),
  last_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  send_email_notification: resolvableValue(z.boolean().optional()),
})

export const AwsAppstreamUserOutputSchema = z.object({
  arn: z.string().optional(),
  created_time: z.string().optional(),
  id: z.string().optional(),
})

export type AwsAppstreamUserInputProps =
  & z.input<typeof AwsAppstreamUserInputSchema>
  & NodeProps

export type AwsAppstreamUserOutputProps =
  & z.output<typeof AwsAppstreamUserOutputSchema>
  & z.output<typeof AwsAppstreamUserInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appstream_user

export function AwsAppstreamUser(props: Partial<AwsAppstreamUserInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appstream_user'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppstreamUserInputSchema}
      _outputSchema={AwsAppstreamUserOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppstreamUser = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppstreamUserOutputProps>(
    AwsAppstreamUser,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppstreamUsers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppstreamUserOutputProps>(
    AwsAppstreamUser,
    idFilter,
    baseNode,
    optional,
  )
