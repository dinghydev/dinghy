import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SEND_SIGNAL_ACTION = {
  _style: 'shape=mxgraph.sysml.sendSigAct;whiteSpace=wrap;align=center;html=1;',
  _width: 140,
  _height: 40,
}

export function SendSignalAction(props: DiagramNodeProps) {
  return <Shape {...SEND_SIGNAL_ACTION} {...props} />
}
