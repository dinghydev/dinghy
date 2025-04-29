import { IacNodeProps, ResolvableStringSchema } from '@reactiac/base-components'

import { aws } from '../index.ts'
import z from 'zod'
import { Shape } from '@reactiac/base-components'
import { useTypedNode, useTypedNodes } from '@reactiac/base-components'

export const DataAwsSecretsmanagerSecretInputSchema = z.object({
  name: ResolvableStringSchema.optional(),
  arn: ResolvableStringSchema.optional(),
})

export const DataAwsSecretsmanagerSecretOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
  last_changed_date: ResolvableStringSchema.optional(),
})

export type DataAwsSecretsmanagerSecretInputProps =
  & z.output<
    typeof DataAwsSecretsmanagerSecretInputSchema
  >
  & IacNodeProps

export type DataAwsSecretsmanagerSecretOutputProps =
  & z.output<
    typeof DataAwsSecretsmanagerSecretOutputSchema
  >
  & DataAwsSecretsmanagerSecretInputProps

export function DataAwsSecretsmanagerSecret(
  props: DataAwsSecretsmanagerSecretInputProps,
) {
  return (
    <Shape
      {...aws(
        props,
        DataAwsSecretsmanagerSecretInputSchema,
        DataAwsSecretsmanagerSecretOutputSchema,
      )}
    />
  )
}

export const useDataAwsSecretsmanagerSecret = (node?: any, id?: string) =>
  useTypedNode<DataAwsSecretsmanagerSecretOutputProps>(
    DataAwsSecretsmanagerSecret,
    node,
    id,
  )

export const useDataAwsSecretsmanagerSecrets = (node?: any) =>
  useTypedNodes<DataAwsSecretsmanagerSecretOutputProps>(
    DataAwsSecretsmanagerSecret,
    node,
  )
