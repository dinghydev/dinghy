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

export const AwsVerifiedpermissionsSchemaInputSchema = TfMetaSchema.extend({
  policy_store_id: resolvableValue(z.string()),
  definition: resolvableValue(
    z.object({
      value: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const AwsVerifiedpermissionsSchemaOutputSchema = z.object({
  id: z.string().optional(),
  namespaces: z.set(z.string()).optional(),
})

export type AwsVerifiedpermissionsSchemaInputProps =
  & z.input<typeof AwsVerifiedpermissionsSchemaInputSchema>
  & NodeProps

export type AwsVerifiedpermissionsSchemaOutputProps =
  & z.output<typeof AwsVerifiedpermissionsSchemaOutputSchema>
  & z.output<typeof AwsVerifiedpermissionsSchemaInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/verifiedpermissions_schema

export function AwsVerifiedpermissionsSchema(
  props: Partial<AwsVerifiedpermissionsSchemaInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_verifiedpermissions_schema'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVerifiedpermissionsSchemaInputSchema}
      _outputSchema={AwsVerifiedpermissionsSchemaOutputSchema}
      {...props}
    />
  )
}

export const useAwsVerifiedpermissionsSchema = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVerifiedpermissionsSchemaOutputProps>(
    AwsVerifiedpermissionsSchema,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVerifiedpermissionsSchemas = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVerifiedpermissionsSchemaOutputProps>(
    AwsVerifiedpermissionsSchema,
    idFilter,
    baseNode,
    optional,
  )
