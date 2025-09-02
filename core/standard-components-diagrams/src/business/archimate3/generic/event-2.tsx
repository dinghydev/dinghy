import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EVENT_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.event;',
  },
  _original_width: 60,
  _original_height: 35,
}

export function Event2(props: DiagramNodeProps) {
  return <Shape {...EVENT_2} {...props} _style={extendStyle(EVENT_2, props)} />
}
