import { IacNodeProps, ResolvableStringSchema } from '@reactiac/base-components'

import { aws } from './index.js'
import z from 'zod'
import { GroupRegion } from '@reactiac/standard-components-diagrams'
import { useStack } from '@reactiac/base-components'
import { useTypedNode } from '@reactiac/base-components'

export const AwsRegionInputSchema = z.object({
  region: z.string().default('us-east-1'),
})

export type AwsRegionInputProps =
  & z.infer<typeof AwsRegionInputSchema>
  & IacNodeProps

export function AwsRegion(
  props: AwsRegionInputProps,
) {
  const { stack } = useStack()
  const values = AwsRegionInputSchema.parse(props)
  return (
    <GroupRegion
      {...aws({
        _provider: {
          aws: [
            {
              default_tags: [
                {
                  tags: (props as any).default_tags || {
                    'iac:stack-title': stack._title,
                    'iac:stack-name': stack._name,
                  },
                },
              ],
              region: values.region,
            },
          ],
        },
        _stages: ['*'],
        ...props,
        ...values,
      }, AwsRegionInputSchema)}
    />
  )
}

export const useAwsRegion = () => useTypedNode<AwsRegionInputProps>(AwsRegion)
