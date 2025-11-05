import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEND_SIGNAL_ACTION = {
  _style: {
    entity:
      'shape=mxgraph.sysml.sendSigAct;whiteSpace=wrap;align=center;html=1;',
  },
  _width: 140,
  _height: 40,
}

export function SendSignalAction(props: NodeProps) {
  return (
    <Shape
      {...SEND_SIGNAL_ACTION}
      {...props}
      _style={extendStyle(SEND_SIGNAL_ACTION, props)}
    />
  )
}
