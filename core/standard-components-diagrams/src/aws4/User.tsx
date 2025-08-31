import { Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USER = {
  _shape: 'mxgraph.aws4.user',
}

export function User(props: DiagramNodeProps) {
  return <Shape {...USER} {...props} />
}
