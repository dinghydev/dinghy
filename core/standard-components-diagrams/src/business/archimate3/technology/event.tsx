import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EVENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.event;',
  },
  _width: 60,
  _height: 35,
}

export function Event(props: DiagramNodeProps) {
  return <Shape {...EVENT} {...props} _style={extendStyle(EVENT, props)} />
}
