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

export const AwsLakeformationResourceInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  hybrid_access_enabled: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  role_arn: resolvableValue(z.string().optional()),
  use_service_linked_role: resolvableValue(z.boolean().optional()),
  with_federation: resolvableValue(z.boolean().optional()),
  with_privileged_access: resolvableValue(z.boolean().optional()),
})

export const AwsLakeformationResourceOutputSchema = z.object({
  last_modified: z.string().optional(),
})

export type AwsLakeformationResourceInputProps =
  & z.input<typeof AwsLakeformationResourceInputSchema>
  & NodeProps

export type AwsLakeformationResourceOutputProps =
  & z.output<typeof AwsLakeformationResourceOutputSchema>
  & z.output<typeof AwsLakeformationResourceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lakeformation_resource

export function AwsLakeformationResource(
  props: Partial<AwsLakeformationResourceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lakeformation_resource'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLakeformationResourceInputSchema}
      _outputSchema={AwsLakeformationResourceOutputSchema}
      {...props}
    />
  )
}

export const useAwsLakeformationResource = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLakeformationResourceOutputProps>(
    AwsLakeformationResource,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLakeformationResources = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLakeformationResourceOutputProps>(
    AwsLakeformationResource,
    idFilter,
    baseNode,
    optional,
  )
