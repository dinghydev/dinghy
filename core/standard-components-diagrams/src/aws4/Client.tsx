import { Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLIENT = {
  _shape: 'mxgraph.aws4.client',
}

export function Client(props: DiagramNodeProps) {
  return <Shape {...CLIENT} {...props} />
}
