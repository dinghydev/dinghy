import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  workgroup_name: resolvableValue(z.string()),
  db_name: resolvableValue(z.string().optional()),
  duration_seconds: resolvableValue(z.number().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  db_password: z.string().optional(),
  db_user: z.string().optional(),
  expiration: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/redshiftserverless_credentials

export function DataAwsRedshiftserverlessCredentials(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshiftserverless_credentials'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRedshiftserverlessCredentialss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsRedshiftserverlessCredentials,
    idFilter,
    baseNode,
    optional,
  )
