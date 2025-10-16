import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RECEIVE_SIGNAL_ACTION = {
  _style: {
    entity:
      'shape=mxgraph.sysml.accEvent;flipH=1;whiteSpace=wrap;align=center;html=1;',
  },
  _width: 140,
  _height: 40,
}

export function ReceiveSignalAction(props: DiagramNodeProps) {
  return (
    <Shape
      {...RECEIVE_SIGNAL_ACTION}
      {...props}
      _style={extendStyle(RECEIVE_SIGNAL_ACTION, props)}
    />
  )
}
