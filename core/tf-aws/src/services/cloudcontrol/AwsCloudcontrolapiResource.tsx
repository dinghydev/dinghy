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

export const AwsCloudcontrolapiResourceInputSchema = TfMetaSchema.extend({
  desired_state: resolvableValue(z.string()),
  type_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  role_arn: resolvableValue(z.string().optional()),
  schema: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  type_version_id: resolvableValue(z.string().optional()),
})

export const AwsCloudcontrolapiResourceOutputSchema = z.object({
  properties: z.string().optional(),
})

export type AwsCloudcontrolapiResourceInputProps =
  & z.input<typeof AwsCloudcontrolapiResourceInputSchema>
  & NodeProps

export type AwsCloudcontrolapiResourceOutputProps =
  & z.output<typeof AwsCloudcontrolapiResourceOutputSchema>
  & z.output<typeof AwsCloudcontrolapiResourceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudcontrolapi_resource

export function AwsCloudcontrolapiResource(
  props: Partial<AwsCloudcontrolapiResourceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudcontrolapi_resource'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudcontrolapiResourceInputSchema}
      _outputSchema={AwsCloudcontrolapiResourceOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudcontrolapiResource = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudcontrolapiResourceOutputProps>(
    AwsCloudcontrolapiResource,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudcontrolapiResources = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudcontrolapiResourceOutputProps>(
    AwsCloudcontrolapiResource,
    idFilter,
    baseNode,
    optional,
  )
