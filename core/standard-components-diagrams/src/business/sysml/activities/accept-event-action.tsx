import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACCEPT_EVENT_ACTION = {
  _style:
    'html=1;shape=mxgraph.sysml.accEvent;strokeWidth=2;whiteSpace=wrap;align=center;',
  _width: 100,
  _height: 60,
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
