import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SEND_SIGNAL_ACTION = {
  _style: {
    entity:
      'shape=mxgraph.sysml.sendSigAct;whiteSpace=wrap;align=center;html=1;',
  },
  _original_width: 140,
  _original_height: 40,
}

export function SendSignalAction(props: DiagramNodeProps) {
  return (
    <Shape
      {...SEND_SIGNAL_ACTION}
      {...props}
      _style={extendStyle(SEND_SIGNAL_ACTION, props)}
    />
  )
}
