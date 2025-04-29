import { IacNodeProps, ResolvableStringSchema } from '@reactiac/base-components'

import { aws } from './index.ts'
import z from 'zod'
import { GroupRegion } from '@reactiac/standard-components-diagrams'
import { useStack } from '@reactiac/base-components'
import { useTypedNode } from '@reactiac/base-components'

export const AwsRegionInputSchema = z.object({
  region: z.string().default('us-east-1'),
  default_tags: z.record(z.string(), z.string()).optional(),
})

export type AwsRegionInputProps =
  & z.input<typeof AwsRegionInputSchema>
  & IacNodeProps

export function AwsRegion(props: AwsRegionInputProps) {
  const { stack } = useStack()
  const region = (node: any) => node._props.region
  const _title = (node: any) => props._title || `Region: ${node._props.region}`
  const onDataBind = (node: any) => {
    if (!props._title) {
      node._props._title = _title(node)
    }
  }
  return (
    <GroupRegion
      {...aws(
        {
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
                region,
              },
            ],
          },
          _stackResource: true,
          _title,
          onDataBind,
          ...props,
        },
        AwsRegionInputSchema,
      )}
    />
  )
}

export const useAwsRegion = () => useTypedNode<AwsRegionInputProps>(AwsRegion)
