import { IacNodeProps } from '@reactiac/base-components'

import { aws } from '../index.ts'
import z from 'zod'
import { Shape } from '@reactiac/base-components'
import { useTypedNode } from '@reactiac/base-components'

export const DataAwsIamPolicyDocumentInputSchema = z.object({
  statement: z.any(),
})

export const DataAwsIamPolicyDocumentOutputSchema = z.object({
  json: z.any(),
})

export type DataAwsIamPolicyDocumentInputProps = z.infer<
  typeof DataAwsIamPolicyDocumentInputSchema
> &
  IacNodeProps

export type DataAwsIamPolicyDocumentOutputProps = z.infer<
  typeof DataAwsIamPolicyDocumentOutputSchema
> &
  DataAwsIamPolicyDocumentInputProps

export function DataAwsIamPolicyDocument(
  props: DataAwsIamPolicyDocumentInputProps,
) {
  return (
    <Shape
      {...aws(
        props,
        DataAwsIamPolicyDocumentInputSchema,
        DataAwsIamPolicyDocumentOutputSchema,
      )}
    />
  )
}

export const useDataAwsIamPolicyDocument = (id?: string) =>
  useTypedNode<DataAwsIamPolicyDocumentOutputProps>(
    DataAwsIamPolicyDocument,
    id,
  )
