import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USER = {
  _shape: 'mxgraph.aws4.user',
}

export function User(props: DiagramNodeProps) {
  return <Shape {...USER} {...props} />
}
