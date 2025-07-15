import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DPST_ON = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.dpst2;elSwitchState=on;',
  _width: 75,
  _height: 39,
}

export function DpstOn(props: DiagramNodeProps) {
  return <Shape {...DPST_ON} {...props} />
}
