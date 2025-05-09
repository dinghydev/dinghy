import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLIENT = {
  _shape: 'mxgraph.aws4.client',
}

export function Client(props: DiagramNodeProps) {
  return <Shape {...CLIENT} {...props} />
}
