import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEND_SIGNAL_ACTION = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.sendSigAct;strokeWidth=2;whiteSpace=wrap;align=center;',
  },
  _width: 100,
  _height: 60,
}

export function SendSignalAction(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SEND_SIGNAL_ACTION)} />
}
