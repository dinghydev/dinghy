import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EVENT = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.event;',
  _width: 60,
  _height: 35,
}

export function Event(props: DiagramNodeProps) {
  return <Shape {...EVENT} {...props} />
}
