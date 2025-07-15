import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SEND_SIGNAL_ACTION = {
  _style:
    'html=1;shape=mxgraph.sysml.sendSigAct;strokeWidth=2;whiteSpace=wrap;align=center;',
  _width: 100,
  _height: 60,
}

export function SendSignalAction(props: DiagramNodeProps) {
  return <Shape {...SEND_SIGNAL_ACTION} {...props} />
}
