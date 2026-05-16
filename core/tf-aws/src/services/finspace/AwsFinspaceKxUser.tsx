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

export const AwsFinspaceKxUserInputSchema = TfMetaSchema.extend({
  environment_id: resolvableValue(z.string()),
  iam_role: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsFinspaceKxUserOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsFinspaceKxUserInputProps =
  & z.input<typeof AwsFinspaceKxUserInputSchema>
  & NodeProps

export type AwsFinspaceKxUserOutputProps =
  & z.output<typeof AwsFinspaceKxUserOutputSchema>
  & z.output<typeof AwsFinspaceKxUserInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/finspace_kx_user

export function AwsFinspaceKxUser(props: Partial<AwsFinspaceKxUserInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_finspace_kx_user'
      _category='resource'
      _title={_title}
      _inputSchema={AwsFinspaceKxUserInputSchema}
      _outputSchema={AwsFinspaceKxUserOutputSchema}
      {...props}
    />
  )
}

export const useAwsFinspaceKxUser = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsFinspaceKxUserOutputProps>(
    AwsFinspaceKxUser,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsFinspaceKxUsers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsFinspaceKxUserOutputProps>(
    AwsFinspaceKxUser,
    idFilter,
    baseNode,
    optional,
  )
