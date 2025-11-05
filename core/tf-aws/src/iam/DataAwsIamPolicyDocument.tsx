import { NodeProps } from '@dinghy/base-components'

import { awsProps } from '../index.ts'
import z from 'zod'
import { Shape } from '@dinghy/base-components'
import { useTypedNode } from '@dinghy/base-components'

export const DataAwsIamPolicyDocumentInputSchema = z.object({
  statement: z.any(),
})

export const DataAwsIamPolicyDocumentOutputSchema = z.object({
  json: z.any(),
})

export type DataAwsIamPolicyDocumentInputProps =
  & z.output<
    typeof DataAwsIamPolicyDocumentInputSchema
  >
  & NodeProps

export type DataAwsIamPolicyDocumentOutputProps =
  & z.output<
    typeof DataAwsIamPolicyDocumentOutputSchema
  >
  & DataAwsIamPolicyDocumentInputProps

export function DataAwsIamPolicyDocument(
  props: DataAwsIamPolicyDocumentInputProps,
) {
  return (
    <Shape
      {...awsProps(
        props,
        DataAwsIamPolicyDocumentInputSchema,
        DataAwsIamPolicyDocumentOutputSchema,
      )}
    />
  )
}

export const useDataAwsIamPolicyDocument = (node?: any, id?: string) =>
  useTypedNode<DataAwsIamPolicyDocumentOutputProps>(
    DataAwsIamPolicyDocument,
    node,
    id,
  )
