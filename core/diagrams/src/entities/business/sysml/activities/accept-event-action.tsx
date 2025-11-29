import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACCEPT_EVENT_ACTION = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.accEvent;strokeWidth=2;whiteSpace=wrap;align=center;',
  },
  _width: 100,
  _height: 60,
}

export function AcceptEventAction(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ACCEPT_EVENT_ACTION)} />
}
