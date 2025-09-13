import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EVENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.application;appType=event;archiType=rounded',
  },
  _width: 150,
  _height: 75,
}

export function Event(props: DiagramNodeProps) {
  return <Shape {...EVENT} {...props} _style={extendStyle(EVENT, props)} />
}
