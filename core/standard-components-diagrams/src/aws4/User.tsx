import { Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const USER = {
  _shape: 'mxgraph.aws4.user',
}

export function User(props: DiagramNodeProps) {
  return <Shape {...USER} {...props} />
}
