import { Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLIENT = {
  _shape: 'mxgraph.aws4.client',
}

export function Client(props: DiagramNodeProps) {
  return <Shape {...CLIENT} {...props} />
}
