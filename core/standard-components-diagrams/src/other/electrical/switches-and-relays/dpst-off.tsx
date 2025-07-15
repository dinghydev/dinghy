import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DPST_OFF = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.dpst2;elSwitchState=off;',
  _width: 75,
  _height: 39,
}

export function DpstOff(props: DiagramNodeProps) {
  return <Shape {...DPST_OFF} {...props} />
}
