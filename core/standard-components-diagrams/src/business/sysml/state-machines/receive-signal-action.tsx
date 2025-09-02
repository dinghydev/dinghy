import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RECEIVE_SIGNAL_ACTION = {
  _style: {
    entity:
      'shape=mxgraph.sysml.accEvent;flipH=1;whiteSpace=wrap;align=center;html=1;',
  },
  _original_width: 140,
  _original_height: 40,
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
