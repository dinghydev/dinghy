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

export const AwsAppfabricAppBundleInputSchema = TfMetaSchema.extend({
  customer_managed_key_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsAppfabricAppBundleOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsAppfabricAppBundleImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsAppfabricAppBundleInputProps =
  & z.input<typeof AwsAppfabricAppBundleInputSchema>
  & z.input<typeof AwsAppfabricAppBundleImportSchema>
  & NodeProps

export type AwsAppfabricAppBundleOutputProps =
  & z.output<typeof AwsAppfabricAppBundleOutputSchema>
  & z.output<typeof AwsAppfabricAppBundleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appfabric_app_bundle

export function AwsAppfabricAppBundle(
  props: Partial<AwsAppfabricAppBundleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appfabric_app_bundle'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppfabricAppBundleInputSchema}
      _outputSchema={AwsAppfabricAppBundleOutputSchema}
      _importSchema={AwsAppfabricAppBundleImportSchema}
      {...props}
    />
  )
}

export const useAwsAppfabricAppBundle = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppfabricAppBundleOutputProps>(
    AwsAppfabricAppBundle,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppfabricAppBundles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppfabricAppBundleOutputProps>(
    AwsAppfabricAppBundle,
    idFilter,
    baseNode,
    optional,
  )
