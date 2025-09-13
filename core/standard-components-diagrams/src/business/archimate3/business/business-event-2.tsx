import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUSINESS_EVENT_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.event;',
  },
  _width: 60,
  _height: 35,
}

export function BusinessEvent2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUSINESS_EVENT_2}
      {...props}
      _style={extendStyle(BUSINESS_EVENT_2, props)}
    />
  )
}
