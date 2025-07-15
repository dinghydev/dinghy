import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMMENT = {
  _style: 'shape=mxgraph.ios7.icons.user;fillColor=#ffffff;strokeColor=#253858',
  _width: 470,
  _height: 125,
}

export function Comment(props: DiagramNodeProps) {
  return <Shape {...COMMENT} {...props} />
}
