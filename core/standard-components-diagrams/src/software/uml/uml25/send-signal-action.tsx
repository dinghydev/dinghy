import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SEND_SIGNAL_ACTION = {
  _style:
    'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=0;notch2=20;align=center;verticalAlign=middle;fontSize=14;fontStyle=0;fillColor=#FFFFFF;whiteSpace=wrap;',
  _width: 160,
  _height: 40,
}

export function SendSignalAction(props: DiagramNodeProps) {
  return <Shape {...SEND_SIGNAL_ACTION} {...props} />
}
