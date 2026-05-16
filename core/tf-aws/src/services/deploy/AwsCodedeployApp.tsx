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

export const AwsCodedeployAppInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  compute_platform: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsCodedeployAppOutputSchema = z.object({
  application_id: z.string().optional(),
  arn: z.string().optional(),
  github_account_name: z.string().optional(),
  id: z.string().optional(),
  linked_to_github: z.boolean().optional(),
  name: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCodedeployAppInputProps =
  & z.input<typeof AwsCodedeployAppInputSchema>
  & NodeProps

export type AwsCodedeployAppOutputProps =
  & z.output<typeof AwsCodedeployAppOutputSchema>
  & z.output<typeof AwsCodedeployAppInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codedeploy_app

export function AwsCodedeployApp(props: Partial<AwsCodedeployAppInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codedeploy_app'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodedeployAppInputSchema}
      _outputSchema={AwsCodedeployAppOutputSchema}
      {...props}
    />
  )
}

export const useAwsCodedeployApp = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodedeployAppOutputProps>(
    AwsCodedeployApp,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodedeployApps = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodedeployAppOutputProps>(
    AwsCodedeployApp,
    idFilter,
    baseNode,
    optional,
  )
