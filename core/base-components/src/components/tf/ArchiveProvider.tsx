import { NodeProps, Shape } from '@dinghy/base-components'

import z from 'zod'

export const InputSchema = z.object({
  required_providers: z.record(
    z.string(),
    z.object({
      source: z.string().default('aws'),
      version: z.string(),
    }),
  ).default({
    archive: {
      source: 'archive',
      version: '2.7.1',
    },
  }),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export function ArchiveProvider(props: Partial<InputProps>) {
  return (
    <Shape
      _category='provider'
      _inputSchema={InputSchema}
      _stackResource
      {...props}
    />
  )
}
