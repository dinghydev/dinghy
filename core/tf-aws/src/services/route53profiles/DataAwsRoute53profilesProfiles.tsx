import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsRoute53profilesProfilesInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
})

export const DataAwsRoute53profilesProfilesOutputSchema = z.object({
  profiles: z.object({
    arn: z.string(),
    id: z.string(),
    name: z.string(),
    share_status: z.string(),
  }).array().optional(),
})

export type DataAwsRoute53profilesProfilesInputProps =
  & z.input<typeof DataAwsRoute53profilesProfilesInputSchema>
  & NodeProps

export type DataAwsRoute53profilesProfilesOutputProps =
  & z.output<typeof DataAwsRoute53profilesProfilesOutputSchema>
  & z.output<typeof DataAwsRoute53profilesProfilesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/route53profiles_profiles

export function DataAwsRoute53profilesProfiles(
  props: Partial<DataAwsRoute53profilesProfilesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53profiles_profiles'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRoute53profilesProfilesInputSchema}
      _outputSchema={DataAwsRoute53profilesProfilesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRoute53profilesProfiless = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRoute53profilesProfilesOutputProps>(
    DataAwsRoute53profilesProfiles,
    idFilter,
    baseNode,
    optional,
  )
