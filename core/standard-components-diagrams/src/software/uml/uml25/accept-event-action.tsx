import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACCEPT_EVENT_ACTION = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=20;notch2=0;align=center;verticalAlign=middle;fontSize=14;fontStyle=0;fillColor=#FFFFFF;flipH=0;spacingRight=0;spacingLeft=14;whiteSpace=wrap;',
  },
  _original_width: 170,
  _original_height: 40,
}

export function AcceptEventAction(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACCEPT_EVENT_ACTION}
      {...props}
      _style={extendStyle(ACCEPT_EVENT_ACTION, props)}
    />
  )
}
