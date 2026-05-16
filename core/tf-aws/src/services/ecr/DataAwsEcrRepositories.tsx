import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEcrRepositoriesInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
})

export const DataAwsEcrRepositoriesOutputSchema = z.object({
  id: z.string().optional(),
  names: z.set(z.string()).optional(),
})

export type DataAwsEcrRepositoriesInputProps =
  & z.input<typeof DataAwsEcrRepositoriesInputSchema>
  & NodeProps

export type DataAwsEcrRepositoriesOutputProps =
  & z.output<typeof DataAwsEcrRepositoriesOutputSchema>
  & z.output<typeof DataAwsEcrRepositoriesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ecr_repositories

export function DataAwsEcrRepositories(
  props: Partial<DataAwsEcrRepositoriesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_repositories'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEcrRepositoriesInputSchema}
      _outputSchema={DataAwsEcrRepositoriesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEcrRepositoriess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEcrRepositoriesOutputProps>(
    DataAwsEcrRepositories,
    idFilter,
    baseNode,
    optional,
  )
