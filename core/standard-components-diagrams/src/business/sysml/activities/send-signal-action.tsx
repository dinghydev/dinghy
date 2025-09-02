import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEND_SIGNAL_ACTION = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.sendSigAct;strokeWidth=2;whiteSpace=wrap;align=center;',
  },
  _original_width: 100,
  _original_height: 60,
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
