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

export const AwsCodecatalystSourceRepositoryInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  project_name: resolvableValue(z.string()),
  space_name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsCodecatalystSourceRepositoryOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsCodecatalystSourceRepositoryInputProps =
  & z.input<typeof AwsCodecatalystSourceRepositoryInputSchema>
  & NodeProps

export type AwsCodecatalystSourceRepositoryOutputProps =
  & z.output<typeof AwsCodecatalystSourceRepositoryOutputSchema>
  & z.output<typeof AwsCodecatalystSourceRepositoryInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codecatalyst_source_repository

export function AwsCodecatalystSourceRepository(
  props: Partial<AwsCodecatalystSourceRepositoryInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codecatalyst_source_repository'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodecatalystSourceRepositoryInputSchema}
      _outputSchema={AwsCodecatalystSourceRepositoryOutputSchema}
      {...props}
    />
  )
}

export const useAwsCodecatalystSourceRepository = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodecatalystSourceRepositoryOutputProps>(
    AwsCodecatalystSourceRepository,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodecatalystSourceRepositorys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodecatalystSourceRepositoryOutputProps>(
    AwsCodecatalystSourceRepository,
    idFilter,
    baseNode,
    optional,
  )
