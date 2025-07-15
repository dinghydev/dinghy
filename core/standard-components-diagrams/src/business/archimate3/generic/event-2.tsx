import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EVENT_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.event;',
  _width: 60,
  _height: 35,
}

export function Event2(props: DiagramNodeProps) {
  return <Shape {...EVENT_2} {...props} />
}
