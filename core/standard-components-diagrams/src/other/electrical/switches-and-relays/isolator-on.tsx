import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ISOLATOR_ON = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.isolatorSwitch2;elSwitchState=on;',
  _width: 75,
  _height: 20,
}

export function IsolatorOn(props: DiagramNodeProps) {
  return <Shape {...ISOLATOR_ON} {...props} />
}
