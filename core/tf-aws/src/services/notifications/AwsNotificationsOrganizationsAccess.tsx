import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsNotificationsOrganizationsAccessInputSchema = TfMetaSchema
  .extend({
    enabled: resolvableValue(z.boolean()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsNotificationsOrganizationsAccessOutputSchema = z.object({})

export type AwsNotificationsOrganizationsAccessInputProps =
  & z.input<typeof AwsNotificationsOrganizationsAccessInputSchema>
  & NodeProps

export type AwsNotificationsOrganizationsAccessOutputProps =
  & z.output<typeof AwsNotificationsOrganizationsAccessOutputSchema>
  & z.output<typeof AwsNotificationsOrganizationsAccessInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/notifications_organizations_access

export function AwsNotificationsOrganizationsAccess(
  props: Partial<AwsNotificationsOrganizationsAccessInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_notifications_organizations_access'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNotificationsOrganizationsAccessInputSchema}
      _outputSchema={AwsNotificationsOrganizationsAccessOutputSchema}
      {...props}
    />
  )
}

export const useAwsNotificationsOrganizationsAccesss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNotificationsOrganizationsAccessOutputProps>(
    AwsNotificationsOrganizationsAccess,
    idFilter,
    baseNode,
    optional,
  )
